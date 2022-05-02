import Layout from "../components/Layout"

export default function Jsx() {

    const title = <h1>JSX</h1>

    function subtitle() {
        return <h2>yep thats a subtitle</h2>
    }
    
    return (
        <Layout title='Understanding JSX'>
            <div>
                {title}
                {subtitle()}
            </div>
        </Layout>
    )
}