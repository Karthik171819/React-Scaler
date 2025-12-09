import Todo from "./Todo";

export default function TodoContainer({todo, deleteTodo}){
    return(
        <div className="taskContainer">
             {todo.map((todo, index) => {
                return(
                    <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo}/>
                )

             })}
        </div>
    );
}

//Input Tasks container array