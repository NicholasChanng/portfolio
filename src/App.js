import './App.scss';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
// import Experience from './components/Experience';
// import Contact from './components/Contact Me';


function App() {

  return (
    <>
    <Routes>
      <Route path = "/" element = {<Layout /> }>
        <Route index element = {<Home/>}/>
        {/* <Route path = "/experience" element = {<Experience/>}/>
        <Route path = "/contact" element = {<Contact/>}/> */}
      </Route>
    </Routes>

    </>
  )
}



export default App;
