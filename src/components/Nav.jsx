import Link from "next/link"
import styles from '../styles/Nav.module.css'

export default function Nav(props) {
    return (
        <div>
            <Link href={props.destination} passHref>
                <div className={styles.Nav} style={{
                    backgroundColor: props.color ?? 'dodgerblue'
                }}>
                    {props.text}
                </div>
                
            </Link>
        </div>
    )
}