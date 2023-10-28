import React from "react";
import { Link } from "react-router-dom";

function Home(){
        return(
            <div className="">
            <div className='bg-primary'>
              <h1>Cart</h1>
      
            </div>
            <div className='d-flex justify-content-center'>
            
            <Link to='/add'>
              <button type="button" class="btn btn-warning">Add Product</button>
            </Link>
            
            <Link to='/view'>
              <button type="button" class="btn btn-warning">View Product</button>
             </Link> 
            </div>
          </div>
        )
}
export default Home;