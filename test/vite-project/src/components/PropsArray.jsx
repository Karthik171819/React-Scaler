export default function ArrayProps(){
    let animals = ['Lion', 'Cat', 'Dog', 'Tiger']
    return(
        <>
            {animals.map((animal) => (
                <h2>{animal}</h2>
            ))}
        </>
    );
}