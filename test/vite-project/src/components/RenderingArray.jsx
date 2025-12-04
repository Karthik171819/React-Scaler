export default function Fruits(){
    let fruits = [{nmae:"Apple", price:"100"},
                    {nmae:"Apple", price:"100"},
                    {nmae:"Apple", price:"100"},
                ];
    return <div>
        <ol>
            {fruits.map((fruit) => (
             <h2><li>{fruit.nmae} -{fruit.price}</li>  </h2> 
            ))}
        </ol>
    </div>
}