import './App.css';

import {useState, useEffect} from "react";
import{BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [protos, setProtos] = useState([])
  const [loading, setLoading] = useState(false);

  // load protos on page load
  useEffect(() => {
    const loadData = async() => {
      setLoading(true)

      const res = await fetch(API + "/protos")
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));

      setLoading(false)

      setProtos(res);
    };

    loadData();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const proto = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

  await fetch(API + "/protos", {
    method: "POST",
    body: JSON.stringify(proto),
    headers: {
      "Content-Type": "application/json",
    },
  });

  setProtos((prevState) => [...prevState, proto])

    setTitle(""); 
    setTime(""); 
  };

  const handleDelete = async (id) => {
    await fetch(API + "/protos/" + id, {
      method: "DELETE",
    });

    setProtos((prevState) => prevState.filter((proto) => proto.id !== id));
  };

  const handleEdit = async (proto) => {
    proto.done = !proto.done;

    const data = await fetch(API + "/protos/" + proto.id, {
      method: "PUT",
      body: JSON.stringify(proto),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setProtos((prevState) => 
    prevState.map((t) => (t.id === data.id ? (t = data) : t))
    );
  };

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <div className="proto-header">
        <h1>React Proto</h1>
    </div>
    <div className="form-proto">
      <h2>Insira a sua próxima tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
            <label htmlFor='title'>O que você vai fazer?</label>
            <input 
            type='text' 
            name='title' 
            placeholder='Título da tarefa' 
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
            required
            />
        </div>
        <div className='form-control'>
            <label htmlFor='time'>Duração:</label>
            <input 
            type='text' 
            name='time' 
            placeholder='Tempo estimado (em horas)' 
            onChange={(e) => setTime(e.target.value)}
            value={time || ""}
            required
            />
        </div>
      <input type ="submit" value="Enviar" />
      </form>
    </div>
    <div className="list-proto">
      <h2>Lista de tarefas</h2>
      {protos.length === 0 && <p>Não há tarefas!</p>}
      {protos.map((proto) => (
        <div className='proto' key={proto.id}>
          <h3 className={proto.done ? "proto-done" : ""}>{proto.title}</h3>
          <p>Duração: {proto.time}</p>
          <div className='actions'>
            <span onClick={() => handleEdit(proto)}>
              {!proto.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
            </span>
            <BsTrash onClick={() => handleDelete(proto.id)} />
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default App;
