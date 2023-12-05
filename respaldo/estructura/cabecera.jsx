import imagen from "../../estilos/img/itilogo.png";
const Cabecera = () => {
    return (
        <div className="perfil">
             <img src={imagen} alt=""/>
            <h1>Maricruz <br /> Ruiz Luis</h1>
        </div>
    );
};
export default Cabecera;