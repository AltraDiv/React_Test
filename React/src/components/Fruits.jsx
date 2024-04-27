export default function Fruits({seatNum}) {
    return (
        <div>
            {seatNum.map((x) => (
            <ul>
                <li key={x}>
                    {x}
                </li>
            </ul>
            ))}
        </div>
    );
}