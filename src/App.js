import Home from './components/home/Home';
import './App.css';
import data from './data/db.json'
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import TourDetalis from './components/TourDetails/TourDetails'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
function App() {
    return(

        <BrowserRouter>
        <Header/>
        <Routes>
            <Route excat path = '/' element = {<Home/>}></Route>
            <Route excat path = '/tours/:id' element = {<TourDetalis data= {data}/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>

    //    <>
    //    <Home/>
    //    <Routes>
    //     <Route path='/' element = {<Home/>}/>
    //     <Route path='/city/:id' element ={<TourDetails data = {data}/>}/>
    //     </Routes>
       
    //    </>
    )
}

export default App;
