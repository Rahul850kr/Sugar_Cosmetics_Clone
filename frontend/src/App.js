
import './App.css';
import Navbar from './components/Navbar';
import { HomeSlider } from './HomeSlider/sliderhome';
import AllRoutes from './Routes/AllRoutes';
import Home from './Routes/Home';
import { SimpleSlider } from './SimpleSlider/slider';

function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}

    {/* <SimpleSlider/> */}
    <Home/>
    {/* <HomeSlider/> */}
    </div>
  );
}

export default App;
