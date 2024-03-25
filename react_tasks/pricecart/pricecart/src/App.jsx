import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/index'
import Footer from './Pages/Footer/index'
import Header from './Pages/Header/index'



function App() {  


    const [count, setCount] = useState(0)
    
  
  const data = [
    {id: 1, name: "Fancy Product", pricing:'$40.00 - $80.00',    incart:false},
    {id: 2, name: "Special Item",  pricing:"20.00 - $18.00",      incart:false},
    {id: 3, name: "Sale Item",     pricing:"$50.00 - $25.00",     incart:false},
    {id: 4, name: "Popular  Item", pricing:"$40.00",            incart:false},    
    {id: 5, name: "Sale Item",     pricing:"$50.00 - $25.00",     incart:false},      
    {id: 6, name: "Fancy Product", pricing:"$120.00 - $280.00", incart:false},
    {id: 7, name: "special Item",  pricing:"$20.00 - $18.00",     incart:false},
    {id: 8, name: "Popular Item",  pricing:"$40.00",            incart:false},
  ];
  return (
    <>  
   <div>
        
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">All Products</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                            <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-outline-dark" type="submit">
                        <i className="bi-cart-fill me-1"></i>
                        Cart
                        <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                    </button>
                </form>
            </div>
        </div>
    </nav>
    <Header></Header>

  
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

{/* 
      {data.map((prod) => (
      <Home prod={prod} key={`prod-card-${prod.id}`} />        
      ))} */}


{data.map((prod,idx)=> <Home
        key = {idx}
        idx = {idx}
        prod={prod}
        count={count}
        setCount={setCount}/>      
  )}

       </div>
        </div>
    </section>
    
    <Footer></Footer>
    </div>
    </>
  );
}

export default App;

