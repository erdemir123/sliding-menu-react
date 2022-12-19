
import './App.css';

function App() {
  const handleClick=(e)=>{
console.log(e.target.getBoundingClientRect());
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Hakkımızda</button>
      <button onClick={handleClick}>İletişim</button>
      <button onClick={handleClick}>Blog</button>
      <button onClick={handleClick}>Makaleler</button>
      <button onClick={handleClick}>Dersler</button>
    </div>
  );
}

export default App;
