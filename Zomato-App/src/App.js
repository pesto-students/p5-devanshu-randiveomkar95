import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
function App() {
  return (
    <div className="App">
        <Header />
          <Routes>
            <Route key="home" path='/' element={<Home />} />
            <Route key="about" path='/about' element={<About />} />
            <Route key="contact" path='/contact' element={<Contact />} />
            <Route key="login" path='/login' element={<Login />} />
            <Route key="register" path='/register' element={<Register />} />
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
