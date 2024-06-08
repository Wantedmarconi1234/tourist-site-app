import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {

  const tourismData = data.map( item => {
    return (
        <Card 
        {...item}
        />
    )
  })



  return (
    <div className="App">
      <Navbar/>
      <div>
        {tourismData}
      </div>
    </div>
  );
}

export default App;
