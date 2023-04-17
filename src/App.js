import { Route, Routes } from 'react-router-dom';

import './App.css';
import ProductGallery from './pages/ProductGallery';
import ProductDetailPage from './pages/ProductDetailPage';


function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<ProductGallery />} />
				<Route path='/:productItemId' element={<ProductDetailPage />} />
			</Routes>
		</div>
	);
}

export default App;
