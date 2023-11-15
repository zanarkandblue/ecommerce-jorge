import "bulma/css/bulma.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
         <NavBar/>
         <ItemListContainer greeting="La tienda está vacía. ¡Vuelve pronto!"/>
    </div>
  );
}

export default App;
