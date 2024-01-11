import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
         <Route  path=' /' element={<Home/>}/>
         <Route  path=' /about' element={<About/>}/>
         <Route  path='/contact' element={<Contact/>}/>
         <Route  path='/service' element={<Service/>}/>
         <Route  path='*' element={<Notfound/>}/>

      </Routes>

    </Router>
  );
}

export default App;
