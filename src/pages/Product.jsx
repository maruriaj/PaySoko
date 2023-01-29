import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProductImg from '../components/ProductImg';
import ProductMain from '../components/ProductMain';
import { fetchProducts } from '../Requests';

function Product() {
  const { id } = useParams();
  const { search } = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const category = search.slice(3).replaceAll(':', ' ').replaceAll(';', "'");
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetchProducts(id);
      setLoading(false);
      setProducts(response.data);
    })();
  }, [id]);
  return (
    <>
      <ProductImg category={category} products={products} />
      <ProductMain products={products} loading={loading} category={category} />
    </>
  );
}

export default Product;
