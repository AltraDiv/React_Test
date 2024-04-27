import Fruits from "./Fruits.jsx"
function Hello({person}) {
    return (
    <div>
        <h1> 
            Hello {person.name} !
            <Fruits seatNum={person.seatNum} />
        </h1> 
    </div>
    );
}

export default Hello;