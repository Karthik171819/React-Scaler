export default function Fruit({name, price}){
    return<>
    {/* <h2><li>The price of {name} is {price}</li></h2> */}

    {/* Ternary operater */}

    <li>{price > 60 ? <h2>The price of {name} is {price}</h2> : ""} </li>
    

    </>
}