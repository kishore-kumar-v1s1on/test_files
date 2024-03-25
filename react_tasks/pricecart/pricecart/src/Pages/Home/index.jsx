import React, {useState}  from 'react';

function index  ({prod,idx,count,setCount}){

    const [show , setshow] = useState(false) 

    function addToCart (){
        setshow(!show)
        setCount(count+1)
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      }
      function removeFromCart(){
        setshow(!show)
        setCount(count-1)
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      }



 

    return(  
        <div className="col mb-5">
<div className="card h-100">
    <div className="badge bg-dark text-white position-absolute" style={{top:"0.5rem", right:"0.5rem"}}>Sale</div>
    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    <div className="card-body p-4">
        <div className="text-center">
            <h5 className="fw-bolder">{prod.name}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
                {/* <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div> */}
            </div>
            <span className="text-muted  ">{prod.pricing}</span>
        </div>
    </div>
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
        {/* {prod.incart ? ( 
        <button className="btn btn-outline-dark mt-auto"  onClick={() => {setItemCount(Math.max(itemCount - 1, 0)); }}>Remove From cart</button>
        ):(
        <button className="btn btn-outline-dark mt-auto"  onClick={() => {setItemCount(itemCount + 1); }}>Add to cart</button>
        )} */}

 {!show ? ( 
        <button className="btn btn-outline-dark mt-auto"  onClick={removeFromCart}>Add to cart</button>
        ):(
            <button className="btn btn-outline-dark mt-auto"  onClick={addToCart}>Remove From cart</button>
        )}


        </div>
    </div>
    
</div>
</div>
        );
    }

   

    export default index;





 