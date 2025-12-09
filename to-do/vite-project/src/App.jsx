
import './App.css'

export default function App() {
  return(
      <main>
        <h1>To Do List</h1>

        <div className="input-container">
          <input type="text" placeholder='Enter Task'/>
          <button>+</button>
        </div>
      </main>
  )
}