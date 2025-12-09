
import './App.css'

export default function App() {
  return(
      <main>
        <h1>To Do List</h1>

        

        <div className="taskContainer">
              <div className="todo">
                <p>Go to GYM Buddy</p>

                <div className="actions">
                  <input type="checkbox"/>
                  <button>Delete</button>
                </div>

              </div>
        </div>
      </main>
  )
}