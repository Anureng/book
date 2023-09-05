"use client"
import { useCart } from "./CartContext";
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
  
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
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