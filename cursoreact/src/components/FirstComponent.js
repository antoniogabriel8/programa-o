import AnotherComponent from './AnotherComponent';

function FirstComponent() {
// algum comentario

const name = "Zelda";

    return (
        <div className="firstcomponent">
            {/* comentario no jsx */}
            <p>Segundo componente</p>
            {2 + 2}
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent