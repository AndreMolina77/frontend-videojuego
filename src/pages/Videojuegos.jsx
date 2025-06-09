import { Link } from 'react-router-dom';
import Titulo from '../components/Títulos';
import InputText from '../components/InputText';
import Boton from '../components/Boton';
import { useForm } from 'react-hook-form';
import useDataVideojuegos from '../hooks/useDataVideojuegos';
const Videojuegos = () => {

    const methods = useForm()

    const {} = useDataVideojuegos(methods)

    const {
        register,
        handleSubmit,
        errors
    } = useDataVideojuegos(methods);

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/inicio" className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-auto text-center hover:bg-green-200 transition-colors">
        Back To Dashboard
      </Link>
      <form onSubmit={handleSubmit} className="border-b border-gray-900/10 pb-12 bg-white shadow-md rounded-lg flex flex-col p-4 ">
        <Titulo titulo="Información del videojuego" />
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Juego */}
          <InputText
            type="text"
            name="juego"
            label="Juego"
            placeholder="Introduce el nombre del videojuego"
            register={register}
            errors={errors}
          />
          {/* Genero */}
          <InputText
            type="text"
            name="genero"
            label="Género"
            placeholder="Introduce el género del videojuego"
            register={register}
            errors={errors}
          />
          {/* dificultad */}
          <InputText
            type="text"
            name="dificultad"
            label="Dificultad"
            placeholder="Introduce la dificultad del videojuego"
            register={register}
            errors={errors}
          />
           {/* plataforma */}
          <InputText
            type="text"
            name="plataforma"
            label="Plataforma"
            placeholder="Introduce la plataforma del videojuego"
            register={register}
            errors={errors}
          />
           {/* lanzamiento*/}
          <InputText
            type="text"
            name="lanzamiento"
            label="Lanzamiento"
            placeholder="Introduce la fecha de lanzamiento del videojuego"
            register={register}
            errors={errors}
          />
        </div>
        <Boton type="submit" text="Guardar Videojuego"/>
      </form>
    </div>
    )



}
export default Videojuegos;