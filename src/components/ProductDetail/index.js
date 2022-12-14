import React from 'react';
import './index.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../pages/Cart/cartSlice';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        };
        getProduct();
    }, []);

    const handleAddItem = () => {
        dispatch(addItem(product));
        enqueueSnackbar('You have added an item', { variant: 'info' });
    };
    const Loading = () => {
        return (
            <div className="product">
                <div className="product__preview">
                    <Skeleton height={200} width={200} />
                </div>
                <div className="product__overview">
                    <h3 className="product__category">
                        <Skeleton count={1} width={100} />
                    </h3>

                    <p className="product__name">
                        <Skeleton count={1} width={400} />
                    </p>

                    <p className="product__rating">
                        <Skeleton count={1} width={100} />
                    </p>
                    <h2 className="product__price mg-sm">
                        <Skeleton count={1} width={100} />
                    </h2>

                    <p className="product__desc">
                        <Skeleton count={5} width={400} />
                    </p>

                    <div>
                        <Skeleton count={1} width={80} />
                    </div>
                </div>
            </div>
        );
    };

    const ProductDetail = () => {
        return (
            <div className="product">
                <div className="product__preview">
                    <img src={product.image} className="product__img" alt={product.title} />
                </div>
                <div className="product__overview">
                    <h3 className="product__category">{product.category}</h3>
                    <p className="product__name">{product.title}</p>
                    <p className="product__rating">
                        Rating {product.rating && product.rating.rate}
                        <FontAwesomeIcon className="rate__icon" icon="fa-solid fa-m fa-star" />
                    </p>
                    <h2 className="product__price mg-sm"> $ {product.price}</h2>
                    <p className="product__desc">{product.description}</p>
                    <div>
                        <button
                            className="product__btn btn--add"
                            onClick={() => {
                                handleAddItem();
                            }}
                        >
                            Add to cart
                        </button>
                        <Link to="/cart" className="product__btn btn--go">
                            Go to cart
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="container">{loading ? <Loading /> : <ProductDetail />}</div>
        </div>
    );
}

export default Product;
