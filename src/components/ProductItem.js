import { Link } from 'react-router-dom';

const ProductItem = (props) => {

    return (
        <article className='productGallery'>
            <div className='productContainer'>
                <img src={props.img} alt={`image of ${props.title}`} />
                <h2 >{props.title}</h2>
                <p>{props.price}</p>
                <Link to={`/${props.productId}`}>Check Details</Link>
            </div>
        </article>
    );
}

export default ProductItem;