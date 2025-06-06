import { useEffect, useState } from "react";
import{ url } from "../../utils/apiUrl"
import { toast } from "react-hot-toast"

const [videojuegos, setVideojuegos] = useState([]);

const getVideojuegos = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error haciendo fetch a los videojuegos");
        }
        const data = await response.json();
        setVideojuegos(data);
       
    } catch (error) {
        console.error("Error haciendo fetch a los videojuegos:", error);
        toast.error("Error haciendo fetch a los videojuegos");
    }


const getVideojuegoById = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`);
        if (!response.ok) {
          console.log("Fallo hacerle fetch al videojuego");
          throw new Error("Fallo hacerle fetch al videojuego");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Fallo hacerle fetch al videojuego:", error);
        console.log("Fallo hacerle fetch al videojuego");
        return null;
      }
    };

    useEffect(() => {
        getVideojuegos();
    }, []);

    return {
        videojuegos,
        getVideojuegoById,
        getVideojuegos
    }
}

export default useFetchVideojuegos;