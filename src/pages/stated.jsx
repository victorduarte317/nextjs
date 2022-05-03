import { useState } from "react"
import Layout from "../components/Layout"

export default function State() {

    const [number, setNumber] = useState(0)

    function inc() {
        setNumber(number + 1)
    }

    return (
        
        <Layout title='Stated component'>
            <div> {number} </div>
            <button onClick={() => inc()}> Inc </button>
        </Layout>
    )
}