import Layout from '../../../components/Layout';
import { useRouter } from 'next/router'

export default function userById() {

    const router = useRouter()

    return (
        <div>
            <Layout title='Dynamic nav'>
                <span>  Id = {router.query.id} </span> <br></br>
                <span> From = {router.query.adjacentInfo} </span>
            </Layout>
        </div>
    )
}