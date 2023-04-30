// import Home from './components/home/Home';
import Header from './components/header/Header';
import Tours from './components/tours/Tours';
import Footer from './components/footer/Footer';
import data from './data/db.json'
import './App.css';

function App() {
    return(
       <>
       {/* <Home/> */}
       <Header/>
       <Tours data = {data}/>
       <Footer/>
       
       </>
    )
}

export default App;
