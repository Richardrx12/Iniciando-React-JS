
import './App.css';

function App() {
  return (
   <div className="container">
    <header>
        <p> React JS </p>
    </header>

    <main>
        <section className='box-titulo'>
            <h1> React JS </h1>
            <p> Biblioteca JavaScript para criar SPAs </p>
            <a href='www.google.com'> Site Oficial </a>
        </section>

        <section className='box-requisitos'>
            <h1> Requisitos </h1>
            <p> Veja abaixo os requisitos mínimos para aprender React JS: </p>
            <div className='box-cards'>
              <div className='card'> <h3>HTML</h3> </div>
              <div className='card'> <h3>CSS</h3> </div>
              <div className='card'> <h3> JavaScript</h3> </div>
            </div>

        </section>
        
    </main>

    <footer>
      <p> Curso de Introdução de React JS </p>
    </footer>
  </div>
  );
}

export default App;
