export default function Fruits(){
    let fruits = [{nmae:"Apple", price:"100"},
                  {nmae:"Orange", price:"80"},
                  {nmae:"Mango", price:"70"},
                ];
    return <div>
        <ol>
            {fruits.map((fruit) => (
             <h2><li key={fruit.nmae}> {fruit.nmae} -{fruit.price}</li>  </h2> 
            ))}
        </ol>
    </div>
}