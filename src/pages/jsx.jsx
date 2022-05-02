export default function Jsx() {

    const titulo = <h1>JSX</h1>

    function subtitle() {
        return <h2>yep thats a subtitle</h2>
    }
    
    return (
        <div>
            {titulo}
            {subtitle()}
        </div>
    )
}