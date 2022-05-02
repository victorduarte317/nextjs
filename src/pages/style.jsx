import styles from '../styles/Style.module.css'
import Layout from '../components/Layout'

export default function Style() {
    return (
        <Layout title='Example: Modular CSS'>
            <div className={styles.purple}>
                <h1>Style using CSS modules</h1>
            </div>
        </Layout>
        
    )
}