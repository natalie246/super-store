import React, { Component } from 'react';
import './ProductPage.css';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
} from 'react-router-dom';
import DescTab from './DescTab';
import WhereTab from './WhereTab';
import WhenTab from './WhenTab';
import WhyTab from './WhyTab';

class ProductPage extends Component {


    constructor(props) {
        super();
        this.state = {
            activeTab: props.activeTab || 1,
            currentProduct:{},
            loading:true
        };
    }

    handleSelect = selectedTab => {
        this.setState({
            activeTab: selectedTab,
        });
    };

    componentDidMount(){

        try {
            // const url = 'http://localhost:3001/getProducts/'+this.props.match.params.category+'/' + this.props.match.params.id;
            const url = 'https://shielded-anchorage-77826.herokuapp.com/getProducts/'+this.props.match.params.category+'/' + this.props.match.params.id;

            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.setState({currentProduct:data,loading:false})

                })
                .catch(error =>
                    console.log('error')
                );
        } catch (e) {
            console.error('Problem', e);
        }

    }

    render() {
        const { match, location } = this.props;

        return (
            <div>
            {
                this.state.loading?


                    <div>Loading...</div>
                    :
                    <div className={'productPage'}>
                    <h4 className={'pageHeader'}>{this.state.currentProduct.hdl}</h4>

                    <Router>
                        <img
                            className={'productImgPage'}
                            align="middle"
                            src={'https://ssl.tzoo-img.com/images/' +this.state.currentProduct.ima.nam}
                        />
                        <div className={'tabs'}>
                            <NavLink
                                activeClassName="activeRoute"
                                activeStyle={{ color: 'dodgerblue' }}
                                className={'tabButton Nav_link'}
                                to={{pathname:`/product-page/${match.params.category}/${match.params.id}/desc`,
                                    state:{
                                        hdl:this.state.currentProduct.hdl,
                                        kw:this.state.currentProduct.kw,
                                        name:this.state.currentProduct.name
                                    }
                                }}
                            >
                                Description
                            </NavLink>
                            <NavLink
                                activeClassName="activeRoute"
                                activeStyle={{ color: 'dodgerblue' }}
                                className={'tabButton Nav_link'}
                                to={{pathname:`/product-page/${match.params.category}/${match.params.id}/where`,
                                    state:{
                                        whe:this.state.currentProduct.whe,
                                    }
                                }}
                            >
                                Where
                            </NavLink>
                            <NavLink
                                activeClassName="activeRoute"
                                activeStyle={{ color: 'dodgerblue' }}
                                className={'tabButton Nav_link'}
                                to={{pathname:`/product-page/${match.params.category}/${match.params.id}/when`,
                                    state:{
                                        whn:this.state.currentProduct.whn,
                                    }
                                }}
                            >
                                When
                            </NavLink>
                            <NavLink
                                activeClassName="activeRoute"
                                activeStyle={{ color: 'dodgerblue' }}
                                className={'tabButton Nav_link'}
                                to={{pathname:`/product-page/${match.params.category}/${match.params.id}/why`,
                                    state:{
                                        why:this.state.currentProduct.why,
                                    }
                                }}
                            >
                                Why
                            </NavLink>

                            <Route
                                exact
                                path={`/product-page/:category/:id/desc`}
                                component={DescTab}
                            />
                            <Route
                                path={`/product-page/:category/:id/where`}
                                component={WhereTab}
                            />
                            <Route
                                path={`/product-page/:category/:id/when`}
                                component={WhenTab}
                            />
                            <Route
                                path={`/product-page/:category/:id/why`}
                                component={WhyTab}
                            />
                        </div>
                    </Router>
                </div>


            }
            </div>
        );
    }
}

export default ProductPage
