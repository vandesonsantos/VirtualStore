import React, { useState, useEffect } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductsCard from '../productCard/ProductCard';

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <section className="products conteiner">
      {
        products.map((product) => <ProductsCard key={product.id} data={product} />)
      }
    </section>
  );
}

export default Products;
