import {Route, Routes} from "react-router-dom"
import FormPage from "./pages/FormPage.jsx";
import "react-toastify/dist/ReactToastify.css";
import Clean from "./layout/Clean.jsx";

function App() {

  return (
    <Routes>
      <Route element={<Clean/>}>
        <Route path="/" element={<FormPage/>}></Route>
      </Route>
    </Routes>
  )


}

export default App
