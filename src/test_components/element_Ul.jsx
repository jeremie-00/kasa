export default function ElementUl({ liste }) {
    return <ul>
        {liste.map((txt, index) => (
            <li key={index}>{txt}</li>
        ))}
    </ul>
}