import Link from "next/link"
import style from "../styles/Layout.module.css"

export default function Layout(props) {
    return (
        <div className={style.layout}>

            <div className={style.header}>
                <h1>{props.title ?? 'example'}</h1>

                <Link href='/'> 
                    <a>Go Back</a> 
                </Link>
            </div>

            <div className={style.content}>
                {props.children}
            </div>

        </div>
    )
}   