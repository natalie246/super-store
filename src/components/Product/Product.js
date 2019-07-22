import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faEdit,
    faTrash,

} from '@fortawesome/free-solid-svg-icons'

library.add(
    faTrash,
    faEdit,
)



const Product = ({ name, price, image, productId, whe, whn, why, kw, hdl,category, isAdmin }) => {
    return (
        <div
            onClick={e => {
                const data = {
                    name: name,
                    price: price,
                    image: image,
                    whe: whe,
                    whn: whn,
                    why: why,
                    kw: kw,
                    hdl: hdl,
                };
            }}
            className={'product'}
        >
            <Link
                style={{ textDecoration: 'none' }}
                to={`/product-page/${category}/${productId}`}
            >
                <div>
                    {isAdmin && <div style={{float:'right'}}>
                        <FontAwesomeIcon style={{marginRight:'15px'}} icon="edit" />
                        <FontAwesomeIcon style={{marginRight:'15px'}} icon="trash"/>


                    </div>}
                    <img
                        className={'productImgList'}
                        src={image}
                        alt={'product image'}
                    />
                    <h6 className={'productHeader'}>{name}</h6>
                    <p>{price}</p>
                </div>
            </Link>
        </div>
    );
};

export default Product;
