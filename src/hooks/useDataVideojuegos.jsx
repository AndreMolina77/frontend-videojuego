import { useEffect } from "react";
import { url } from "../../utils/apiUrl"
import { toast } from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom";
import useFetchVideojuegos from "./useFetchVideojuegos";

const useDataVideojuegos = (methods) => {
    const {getVideojuegoById, getVideojuegos} = useFetchVideojuegos();
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = methods

    const navigate = useNavigate();

    const saveVideojuegoForm = async (dataForm) => {
        try {
            // enviar la solicitud POST a la API
            const response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dataForm),
            });
            if (!response.ok) {
              toast.error("Fallo agregar videojuego");
              throw new Error("Fallo agregar videojuego");
            }
            toast.success("Videojuego guardado exitosamente");
            navigate("/inicio"); // Redirigir a la página de inicio después de guardar
          } catch (error) {
            console.log("Error al  enviado:", error);
          } finally {
            reset(); // reiniciar el formulario después de enviar
            getVideojuegos(); // obtener la lista actualizada de usuarios
          }
    };

    const editVideojuego = async (dataForm) => {
        try {
            const response = await fetch(`${url}/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dataForm),
            });
            if (!response.ok) {
              toast.error("Fallo actualizar videojuego");
              throw new Error("Fallo actualizar videojuego");
            }
            toast.success("Videojuego actualizado exitosamente");
            navigate("/inicio"); // Redirect to home after updating
          } catch (error) {
            console.error("Fallo actualizar videojuego:", error);
            toast.error("Fallo actualizar videojuego");
          } finally {
            reset(); // Reset the form after submission
            getVideojuegos(); // Refresh the user list after updating
          }
    };

    const handleUserAction = (dataForm) => {
        if (id) {
          editVideojuego(dataForm);
        } else {
          saveVideojuegoForm(dataForm);
        }
      };

      const handleUpdateVideojuego = (id) => {
        navigate(`/videojuegos/${id}`)
      };

      const loadVideojuego = async () => {
        if (id) {
            const videojuego = await getVideojuegoById(id);
            if(videojuego){
                reset({
                    juego: videojuego?.juego,
                    genero: videojuego?.genero,
                    dificultad: videojuego?.dificultad,
                    plataforma: videojuego?.plataforma,
                    lanzamiento: videojuego?.lanzamiento
                });
            }
        }
      }

      useEffect(() => {
        loadVideojuego()
      }, [id]);

      return{
        register,
        handleSubmit: handleSubmit(handleUserAction),
        errors,
        getVideojuegoById,
        handleUpdateVideojuego,
        loadVideojuego,
      };
};

export default useDataVideojuegos;