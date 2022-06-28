import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    //params is an object that has key value pairs 
    //where keys are the dynamic segments and 
    const params = useParams();


    return <section>
        <h1>Product Detail</h1>
        <p>{params.id}</p>
    </section>
}

export default ProductDetail