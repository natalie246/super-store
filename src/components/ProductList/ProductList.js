import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = ({category, products, isAdmin }) => {
    return (
        <div className={'flex'}>

            {console.log('products')}
            {console.log(products.length)}
            {console.log(Math.ceil(products.length/10))}
            <ul className={'productListUl'}>
                {products.map((product, i) => {
                    return (
                        <li key={'productLi' + i} className={'productListLi'}>
                            <Product
                                key={'product' + i}
                                name={product.fhd}
                                price={product.prc}
                                image={
                                    'https://ssl.tzoo-img.com/images/' +
                                    product.ima.nam
                                }
                                productId={product.id}
                                whe={product.whe}
                                whn={product.whn}
                                why={product.why}
                                kw={product.kw}
                                hdl={product.hdl}
                                category={category}
                                isAdmin={isAdmin}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductList;
