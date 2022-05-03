import Layout from '../components/Layout';
import { useState } from 'react';

export default function Integration() {

    const [clientId, setClientId] = useState(1)
    const [client, setClient] = useState({})
    
    async function getClient() {
        
        const resp = await fetch(`http://localhost:3000/api/clients/${clientId}`)
        const data = await resp.json()
        setClient(data)
        .then(resp => resp.json())
            .then(data => setClient(data))
    }

    return (
        <Layout title='Integration'>
                <div>
                    <input type="number"value={clientId}
                        onChange = {e => setClientId(e.target.value)} />
                    <button onClick={getClient}>Get Client</button>
                </div>

                <ul>
                    <li>ID: {client.id}</li>
                    <li>Name: {client.name}</li>
                    <li>Email: {client.email}</li>
                </ul>
        </Layout>
    )
}