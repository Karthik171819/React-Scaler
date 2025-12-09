import Todo from "./Todo";

export default function TodoContainer({todo}){
    return(
        <div className="taskContainer">
             {todo.map((todo, index) => {
                return(
                    <Todo key={index} todo={todo}/>
                )

             })}
        </div>
    );
}

//Input Tasks container array