export default function Header(props) {
    // props is read only
    return (
        <header>
            <h1>
                {props.title}
            </h1>
        </header>
    )
}