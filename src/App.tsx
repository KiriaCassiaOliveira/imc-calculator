import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import ReferenceTable from "./components/ReferenceTable";

function App() {
  return (
    <main className="bg-white max-w-4xl mx-auto py-24 px-48">
      <section id="form">
        <form>
          <div>
            <Label htmlFor="weight">Peso (kg) </Label>
            <Input type="text" className="mt-1" id="weight" />
          </div>
          <div className="mt-4">
            <Label htmlFor="height">Altura (cm) </Label>
            <Input type="text" className="mt-1" id="height" />
          </div>
          <Button type="submit">Calcular</Button>
        </form>
      </section>

      <section id="result" className="py-10 px-4 h-50">
        <p className="text-center text-neutral-400">
          Saiba agora se está no seu peso ideal!
        </p>
      </section>

      <section id="reference-table">
        <ReferenceTable />
      </section>
    </main>
  );
}

export default App;
