"use client"
import { useCart } from "@/app/context/CartContext";
import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  interface ProductListProps {
    products: Product[];
  }
  
  const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const { addToCart } = useCart();

    const [getBookData, setGetBookData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    axios.get("http://localhost:8080/api/allbooks")
    .then((response)=>{
        setGetBookData(response.data)
        console.log(response.data);
   setLoading(false)
    })
    .catch((error) => console.log(error));
}, [])
   
  
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {getBookData?.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductList;