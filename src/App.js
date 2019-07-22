import React, { Component } from 'react';
import ProductList from './components/ProductList/ProductList';
import SearchBox from './components/SearchBox/SearchBox';
import Nav from './components/Nav/Nav';
import Loader from './components/Loader/Loader';
import './App.css';
import { setSearchField, requestProducts, requestCurrentProduct } from './actions';
import { connect } from 'react-redux';
import Auth from "./Auth/Auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faPlusCircle,
)

const mapStateToProps = state => {
    return {
        searchField: state.searchProduct.searchField,
        products: state.requestProducts.products,
        isPending: state.requestProducts.isPending,
        error: state.requestProducts.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestProducts: category => dispatch(requestProducts(category)),
    };
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            category: 'vacation',

        };
    }

    componentDidMount() {
        this.props.onRequestProducts(this.state.category);
    }

    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    };

    updateCategory = category => {
        this.setState({ category: category });
        this.props.onRequestProducts(category);
    };




    render() {
        const { products, isPending } = this.props;
        const filteredProducts = products.filter(product => {
            return product.fhd
                .toLowerCase()
                .includes(this.props.searchField.toLowerCase());
        });

        return (
            <div>

                {this.props.match.path==='/callback'?

                    <a className={'login'}

                    >Logout</a>
                    :
                    <a className={'login'}
                       onClick={()=>{
                           const auth = new Auth();
                           auth.login();
                       }}
                    >Login</a>
                }


                <SearchBox searchChange={this.props.onSearchChange} />
                <Nav
                    updateProducts={this.updateProducts}
                    updateCategory={this.updateCategory}
                    category={this.state.category}
                />

                {isPending ? (
                    <div>
                        <Loader />
                    </div>
                ) : (
                    <div>
                        {this.props.match.path==='/callback'&&
                            <FontAwesomeIcon size="2x" style={{marginLeft:'15px',cursor:'pointer'}} icon="plus-circle" />
                        }




                        <ProductList category={this.state.category }
                                     products={filteredProducts}
                                    isAdmin={this.props.match.path==='/callback'}
                        />


                    </div>

                )}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
