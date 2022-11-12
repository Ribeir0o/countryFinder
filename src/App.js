import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Header/>
      <main style={{padding: "0 20px"}}>
        <SearchBar/>
      </main>
    </div>
  );
}

export default App;
