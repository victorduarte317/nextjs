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
        </div>
    )
}