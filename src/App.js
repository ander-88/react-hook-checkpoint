import './App.css';
import AddMovieFromUser from './componant/AddMovieFromUser';
import FilterMovie from './componant/FilterMovie';


function App() {
  return (
    <div style={{backgroundColor:"#2c2c2c", minHeight: "100vh"}}>
      <FilterMovie />
      <AddMovieFromUser />


    </div>
  );
}

export default App;
