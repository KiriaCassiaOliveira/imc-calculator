function App() {
  return (
    <main>
      <section id="form">
        <form>
          <div>
            <label htmlFor="weight">Peso (kg)</label>
            <input type="text" id="weight" />
          </div>
          <div>
            <label htmlFor="height">Altura (cm)</label>
            <input type="text" id="height" />
          </div>
          <button>Calcular</button>
        </form>
      </section>
      <section id="result">
        <p>Saiba agora se está no seu peso ideal!</p>
      </section>
      <section id="reference-table">
        <table>
          <thead>
            <tr>
              <th>Imc</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Menor que 17</td>
              <td>Muito abaixo do peso</td>
            </tr>
            <tr>
              <td>Menos de 18.5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>Entre 18.5 e 24.9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>Entre 25 e 29.9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>Entre 30 e 39.9</td>
              <td>Obesidade grau 1</td>
            </tr>
            <tr>
              <td>Acima de 40</td>
              <td>Obesidade grau 2</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default App;
