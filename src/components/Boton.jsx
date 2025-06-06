const Boton = ({ type, onClick, text}) => {
    return(
        <button
    type={type}
    onClick={onClick}
    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded transition colors"
    >
        {text}
    </button>
    )
    
}

export default Boton;