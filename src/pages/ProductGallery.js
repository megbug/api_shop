import { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductItem from '../components/ProductItem';

const ProductGallery = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    return (
        <div>
            <Navbar />
            <section className='sectionGallery'>
                {products.map((elt) => {
                    return (
                        <div>
                            <ProductItem
                                key={elt.id}
                                img={elt.image}
                                title={elt.title}
                                price={elt.price}
                                productId={elt.id}
                            />
                        </div>
                    )
                })}
            </section>
            <Footer />
        </div>
    );
}

export default ProductGallery;