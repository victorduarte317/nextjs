import Nav from '../components/Nav';

export default function Home() {
    return (
        <div style={{
            
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Nav text="Style" destination="/style" />
            <Nav text="Example" destination="/example" color="#9400d3" />
            <Nav text="JSX" destination="/jsx" color="crimson"/> 
            <Nav text="Navigation #01" destination="/navigation" color="green"/> 
            <Nav text="Navigation #02 - Dynamic" destination="/user/sp-2/321" color="goldenrod"/> 
            <Nav text="Stated component" destination="/stated" color="palevioletred"/> 

        </div>
    )
}