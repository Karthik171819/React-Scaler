import Fruit from "./RenderingArrayComponent";
export default function Fruits(){
    let fruits = [{name:"Apple", price:"100"},
                  {name:"Orange", price:"80"},
                  {name:"Mango", price:"70"},
                ];
    return <div>
        <ol>
            {fruits.map((fruit) => (
            //  <h2><li key={fruit.name}> {fruit.name} -{fruit.price}</li>  </h2>
            //component rendering
            <Fruit name={fruit.name} price={fruit.price}/>
            ))}
        </ol>
    </div>
}