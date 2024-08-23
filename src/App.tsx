import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import ReferenceTable from "./components/ReferenceTable";
import { calculateIMC } from "./lib/IMC";
import { imcResult } from "./lib/IMC";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [imcData, setImcData] = useState<null | {
    weight: number;
    height: number;
    imc: number;
    imcResult: string;
  }>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as {
      weight: string;
      height: string;
    };

    const { weight, height } = data;

    if (!weight || !height) {
      alert("Preencha todos os campos!");
      return;
    }

    const weightNumber = parseFloat(weight.replace(",", "."));
    const heightNumber = parseFloat(height.replace(",", ".")) / 100;

    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      alert("Peso e altura devem ser números!");
      return;
    }

    if (weightNumber < 2 || weightNumber > 500) {
      alert("Peso precisa ser entre 2 e 500!");
      return;
    }

    if (heightNumber < 0.5 || heightNumber > 2.5) {
      alert("Altura precisa ser entre 0.5 e 2.5!");
      return;
    }

    const imc = calculateIMC(weightNumber, heightNumber);
    const IMCResult = imcResult(imc);

    setImcData({
      weight: weightNumber,
      height: heightNumber,
      imc,
      imcResult: IMCResult,
    });

    e.currentTarget.reset();
  }

  function handleClickReset(e : React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setImcData(null);
  }

  return (
    <main className="bg-white max-w-4xl mx-auto py-24 px-48">
      <section id="form">
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="weight">Peso (kg) </Label>
            <Input disabled={!!imcData} name="weight" type="text" className="mt-1" id="weight" />
          </div>
          <div className="mt-4">
            <Label htmlFor="height">Altura (cm) </Label>
            <Input disabled={!!imcData} name="height" type="text" className="mt-1" id="height" />
          </div>
          {imcData ? <Button onClick={handleClickReset}>Refazer</Button> : <Button>Calcular</Button>}
        </form>
      </section>

      <section id="result" className="py-10 px-4 h-50">
        {imcData ? (
          <ResultsTable imcData={imcData} />
        ) : (
          <p className="text-center text-neutral-400">
            Saiba agora se está no seu peso ideal!
          </p>
        )}
      </section>

      <section id="reference-table">
        <ReferenceTable />
      </section>
    </main>
  );
}

export default App;
