import { Link } from 'react-router-dom'
import Titulo from '../components/Títulos'
import Boton from '../components/Boton'
import useVideojuegosActions from '../hooks/useVideojuegosActions'
import useFetchVideojuegos from '../hooks/useFetchVideojuegos'

const Home = () => {
  const { videojuegos, getVideojuegos } = useFetchVideojuegos()
  const { deleteVideojuego, handleUpdateVideojuego } = useVideojuegosActions(getVideojuegos)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/videojuegos" className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-full text-center hover:bg-green-200 transition-colors block mb-6">
        Agregar videojuego
      </Link>
      <Titulo titulo="User Information"/>
      <p className="mt-1 text-sm text-gray-600 mb-4">Lista de videojuegos registrados.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm">
            <tr>
              <th className="px-4 py-2 border-b">Juego</th>
              <th className="px-4 py-2 border-b">Género</th>
              <th className="px-4 py-2 border-b">Dificultad</th>
              <th className="px-4 py-2 border-b">Plataforma</th>
              <th className="px-4 py-2 border-b">Lanzamiento</th>
            </tr>
          </thead>
          <tbody>
            {videojuegos?.map((videojuego) => (
              <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2">{videojuego.juego}</td>
                <td className="px-4 py-2">{videojuego.genero}</td>
                <td className="px-4 py-2">{videojuego.dificultad}</td>
                <td className="px-4 py-2">{videojuego.plataforma}</td>
                <td className="px-4 py-2">{videojuego.lanzamiento}</td>
                <td className="px-4 py-2">
                  <Boton text="Editar" onClick={() => handleUpdateVideojuego(videojuego.id)}/>
                  <Boton text="Eliminar" onClick={() => deleteVideojuego(videojuego.id)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Inicio;