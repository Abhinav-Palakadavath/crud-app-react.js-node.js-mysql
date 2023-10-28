import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function AddProduct() {
    const [product, setProduct] = useState({
        name: "",
        price: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setProduct((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/view", product);
            navigate("/view");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="form">
            <div className='bg-primary'>
                <Link to='/'><h1 className="text-black">Cart</h1></Link>
            </div> 
            <h1>Add Items</h1>
            <input type="text" placeholder="Name" onChange={handleInputChange} name="name" />
            <input type="text" placeholder="Price" onChange={handleInputChange} name="price" />
            <button onClick={handleClick}>Add item</button>
        </div>
    );
}

export default AddProduct;
