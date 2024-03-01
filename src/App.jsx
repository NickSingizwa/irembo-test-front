import './App.css'
import EmployeeRegistration from './pages/EmployeeRegistration'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<EmployeeRegistration />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
