
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Service from './Components/Service';
import Home from './Components/Home';
import {Routes ,Route} from "react-router-dom"


function App() {
  return (
    <>
 
 
    <Header/>

    <Routes>
      <Route  path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route  path='/service' element={<Service/>}></Route>
      <Route  path='/contact' element={<Contact/>}></Route>



      </Routes>
     
    <Footer/>
   
  

    </>
  );
}

export default App;
