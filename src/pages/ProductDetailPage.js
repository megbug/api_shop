import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetailPage = () => {

    const [product, setProduct] = useState([]);

    let productParams = useParams();
    // console.log(productParams.productItemId);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productParams.productItemId}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [])
    // console.log(product);

    return (
        <div>
            <Navbar />
            <ProductDetail
                key={product.id}
                img={product.image}
                title={product.title}
                price={product.price}
                productId={product.id}
                description={product.description}
                category={product.category}
            // ratingRate={product.rating.rate}
            // ratingCount={product.rating.count}
            />
            <Footer />
        </div>
    );
}

export default ProductDetailPage;

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//     "rate": 3.9,
//     "count": 120
//     }
//     }