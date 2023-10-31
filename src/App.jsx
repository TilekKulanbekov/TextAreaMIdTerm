import alatooIcon from './assets/alatooIcon.png'
import Textarea from "./components/TextArea/TextArea.jsx";
import './App.css'


function App() {

  return (
    <>
      <div>
        <div>
          <Textarea />
        </div>
        <a href="http://alatoo.edu.kg/#gsc.tab=0" target="_blank">
          <img src={alatooIcon} className="logo alatoo" alt="alatoo logo" />
        </a>
      </div>
      <h1>Midterm TextArea</h1>
      <div className="card">

      </div>
    </>
  )
}

export default App
