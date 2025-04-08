import { useEffect } from "react"
import './assets/themes/dark-theme.css'
import './assets/themes/light-theme.css'


function App() {
  useEffect(() => {
    document.documentElement.className = 'dark';
  }, []);
  return (
    <div >
      Hello world
    </div>
  )
}

export default App
