import { useState } from "react";

const Hooks = () => {
let idade = 30
const [novaIdade, setNovaIdade] = useState()

    const changeAge = () => {
        idade = 31;
        console.log(idade);
    };

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
        </div>
    )
}

export default Hooks