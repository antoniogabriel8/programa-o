const AnotherComponent = () => {

    const handleClick = () => {
        console.log("Clicou no botão!");
    };

    return (
        <div>
            <p>Terceiro componente</p>
            <button onClick={handleClick}>Evento de click</button>
            <hr />
            <button onClick={() => console.log("teste")}>Evento no Elemento</button>
        </div>
    );
};

export default AnotherComponent;