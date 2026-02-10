import reactImage from './assets/react-core-concepts.png';
import './App.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = (max: number) => Math.floor(Math.random() * (max + 1));

function Header() {
  const randomDescription = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDescription} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>Time to get started!</h2>
    </main>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
