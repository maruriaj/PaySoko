import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Category from './pages/Category';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
