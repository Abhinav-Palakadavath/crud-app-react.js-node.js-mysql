import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function ViewProduct() {
    const [products, setProducts] = useState([]);
    const [editableProduct, setEditableProduct] = useState(null);
   
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8080/view");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8080/view/" + id);
            setProducts(products.filter((product) => product.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (product) => {
        setEditableProduct(product);
    };

    const handleCancelEdit = () => {
        setEditableProduct(null);
    };

    const handleUpdate = async (id, updatedProduct) => {
        try {
            await axios.put(`http://localhost:8080/view/${id}`, updatedProduct);
            setEditableProduct(null);
            setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className='bg-primary'>
                <Link to='/'><h1 className="text-black">Cart</h1></Link>
            </div>
            <h2>Products</h2>
            <div className="products">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        {editableProduct && editableProduct.id === product.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editableProduct.name}
                                    onChange={(e) => setEditableProduct({ ...editableProduct, name: e.target.value })}
                                />
                                <input
                                    type="number"
                                    value={editableProduct.price}
                                    onChange={(e) => setEditableProduct({ ...editableProduct, price: e.target.value })}
                                />
                                <button onClick={() => handleUpdate(product.id, editableProduct)}>Save</button>
                                <button onClick={handleCancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <div className="d-flex">
                                    <h2>{product.name}</h2>
                                </div>
                                <p>Price: {product.price}</p>
                                <button type="button" className="btn btn-success" onClick={() => handleEdit(product)}>
                                    Update
                                </button>
                                <button type='button' onClick={() => handleDelete(product.id)} className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewProduct;
