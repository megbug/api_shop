
const ProductDetail = (props) => {
    // console.log(props);
    return (
        <article className='detailContainer'>
            <div className='detailImg'>
                <img src={props.img} alt={`image of ${props.title}`} />
            </div>
            <div className="detailText">
                <p>{props.category}</p>
                <h2>{props.title}</h2>
                <p>{props.price} €</p>
                <p>{props.description}</p>
                {/* <p>{props.ratingRate}</p> */}
                {/* <p>{props.ratingCount}</p> */}
            </div>
        </article>
    );
}

export default ProductDetail;


/* import { useLocation } from "react-router-dom";

const ProductDetails = () => {

    const location = useLocation();
    console.log(location)

    return (
        <section>
            <h1>{location.state.title}</h1>
            <img src={location.state.image} alt="" />
            <p>{location.state.description}</p>
            <p>{location.state.rating.rate}</p>
            <p>{location.state.rating.count}</p>
        </section>
    );
}

export default ProductDetails; */