import './App.css';

import {useState, useEffect} from "react";
import{BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTile] = useState("")
  const [time, setTime] = useState("")
  const [protos, setProtos] = useState([])
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {

  }

  return (
    <div className="App">
      <div className="proto-header">
        <h1>React Proto</h1>
    </div>
    <div className="form-proto">
      <h2>Insira a sua próxima tarefa:</h2>
      <form onSubmit={handleSubmit}>
      <input type ="submit" value="Enviar" />
      </form>
    </div>
    <div className="list-proto">
      <h2>Lista de tarefas</h2>
      {protos.length === 0 && <p>Não há tarefas!</p>}
    </div>
  </div>
  );
}

export default App;
