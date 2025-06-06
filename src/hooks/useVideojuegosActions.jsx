import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useVideojuegosActions = (getVideojuegos) => {
    const navigate = useNavigate();

    const deleteVideojuego = async (id) => {
        try {
            const response = await fetch(`${url}/${id}`, {
              method: "DELETE",
            });
            toast.success("Videojuego eliminado con exito");
            console.log("Videojuego eliminado:", response);
            getVideojuegos();
          } catch (error) {
            console.error("Error elimninando videojuego:", error);
            toast.error("Error al eliminar videojuego");
          } finally {
            getVideojuegos();
          }
        };

        const handleUpdateVideojuego = (id) => {
            navigate(`/videojuegos/${id}`)
        };

        return{
            deleteVideojuego,
            handleUpdateVideojuego
        };
};

export default useVideojuegosActions;