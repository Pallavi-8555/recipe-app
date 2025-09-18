import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import MealInfo from './Components/MealInfo';
import MainPage from './Components/MainPage';


function App() { 
  return (
     
     
     <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/:mealid' element={<MealInfo/>}/>
     </Routes>
      
  );
}
 
export default App;