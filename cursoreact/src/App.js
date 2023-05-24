import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Images from './components/Images';
import Hook from './components/Hook';

function App() {
  return (
    <div className="App">
      <h2>Olá, Mundo</h2>
      <FirstComponent />
      <AnotherComponent />
      <Images />
      <Hook />
    </div>
  );
}

export default App;
