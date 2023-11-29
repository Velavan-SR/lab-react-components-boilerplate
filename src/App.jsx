import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Navbar from './components/navbar';
import Main from './components/main';
import imageData from './components/data';



function App() {
  return (
    <div>
      
      <Navbar/>

      <Main imageData={imageData}/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
