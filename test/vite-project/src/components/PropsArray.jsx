export default function ArrayProps(){
    let animals = ['Lion', 'Cat', 'Dog', 'Tiger']
    return(
        <>
           <ol>
                 {animals.map((animal) => (
                   <h2><li>{animal}</li></h2> 
                ))}
           </ol>
        </>
    );
}