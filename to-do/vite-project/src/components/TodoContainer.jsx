export default function TodoContainer(){
    return(
        <div className="taskContainer">
              <div className="todo">
                <p>Go to GYM Buddy</p>

                <div className="actions">
                  <input type="checkbox"/>
                  <button>Delete</button>
                </div>

              </div>
        </div>
    )
}