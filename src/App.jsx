import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Bienvenida from "./pages/Bienvenida"
import Inicio from "./pages/Inicio"
import NotFound from './pages/PageNotFound'
import Videojuegos from "./pages/Videojuegos"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Bienvenida />}/>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/videojuegos/:id?" element={<Videojuegos />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style:{
          fontSize: "16px"
        }
      }}
      
      />
    </>
  )
}

export default App
