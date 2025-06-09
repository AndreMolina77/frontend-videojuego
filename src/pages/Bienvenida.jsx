import {React, useState} from "react";
import { useNavigate } from "react-router-dom"
import Boton from "../components/Boton.jsx"

const Bienvenida = () => {
    const [showBienvenida, setShowBienvenida] = useState(true)
    const navigate = useNavigate();

    const handleAceptar = () => {
        setShowBienvenida(false)
        navigate("/inicio")
    }

    if (!showBienvenida) return null;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg.white rounded-lg shoadow-lg p-8 max-w-md w-full text-center">
                <h2>Bienvenida a la aplicación CRUD de videojuegos!</h2>
                <p className="mb-6 text-black-500">¡Gracias por visitar la página!</p>

                <Boton type="button" onClick={handleAceptar} text="Aceptar"></Boton>
            </div>
        </div>
    )
}

export default Bienvenida;
