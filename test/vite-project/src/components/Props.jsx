//formal way of using props

// export default function Props(props){
//     return(<>
//         <h1>Hello {props.name} {props.email}</h1>
//     </>
//     )       
    
// }

//effeicient way of using props
//destructuring
export default function Props({name, email}){
    return(
        <>
            <h1>Hi {name} Your mail id {email}...Thank You!</h1>
           
        </>
    )
}