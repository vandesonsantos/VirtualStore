/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductsCard from '../productCard/ProductCard';
import Loading from '../Loading/Loading';

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchProducts('game').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (<section className="products conteiner">
      {products.map((product) => <ProductsCard key={product.id} data={product} />)}
    </section>)
  );
}

export default Products;
