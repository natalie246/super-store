
import React, { Component } from 'react';
import ProductList from './components/ProductList/ProductList';
import SearchBox from './components/SearchBox/SearchBox';
import Nav from './components/Nav/Nav';
import App from './App';
import './App.css';
import { setSearchField, requestProducts, requestCurrentProduct } from './actions';
import { connect } from 'react-redux';
import ProductPage from "./components/ProductPage/ProductPage";
import Desc from "./components/ProductPage/DescTab";
import Login from "./components/Login/Login";
import {BrowserRouter as Router} from "react-router-dom";
import { Route, Link, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


class AppManager extends Component {
    render() {

        return (
            <div>

                <Router>
                    <Route exact path="/" component={App} />
                    <Route exact path="/callback" component={App} />
                    <Route path="/product-page/:category/:id" component={ProductPage} />
                    <Route path="/product-page/:category/:id/desc" component={Desc} />
                    <Route path="/login" component={Login} />

                    {/*http://localhost:3000/callback#access_token=bMd9fs9iSxBurkkXpQK9WYFfx1trppfg&scope=openid&expires_in=7200&token_type=Bearer&state=Etu3ee9wwHjLP8zgYP-uYuwgKdBH3nLB&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9UZzBNakE0TURORU9EazNSVVJCUVVRME5UWXpPVVJDUXpWQ01rTXpSRVE1UWpZMVJUQTFOZyJ9.eyJpc3MiOiJodHRwczovL2Rldi13MjRrMXdtMy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWNlM2M3MGQ0YWI0YjMwZjU4MmYyZjBkIiwiYXVkIjoiSWVuN09GSDhMZjc3N2tScW5QY1kzbFdISkZlVTZwQWMiLCJpYXQiOjE1NTg4NjczMDYsImV4cCI6MTU1ODkwMzMwNiwiYXRfaGFzaCI6IkgtNUJzTzY4YTF3alV0dHF4ZTRTemciLCJub25jZSI6Ik5aWXhBci15dFRkYzQ5THZwYzFUd1ZZZUpvYnJicm8tIn0.YceBwytWFjoAPnBrs5fy8BoK4u7KhxfESCHP5ddI3Qh35w5DiTKdXpokKJqQ9ruRIH3RhjOc85DtxnYHxyz-OSiOfv9dg4wKj-OFBVZ9EX1F74kFxEkV5M2grZqtrAkldy7yTTayZccqFobfahvY6JzxUEU4mVPmWou7eq79HHVQ3RsaD0genFfNKyb3qfNaQZjLtEGoVPYd7qWWqqgfdq_EJ71wsG3QOHzeDKlwXVIhavYzw3StaKcQbwwvi2B-lIOrPl_06E-2U_mkeQ_r0vMS4MWASW4PS5rizJPL98zJvGTsHuEA8fOsy-HPi63zhrlyQmjTBXDV2B_ZUJ7SpQ*/}
                </Router>
            </div>

        )


    }


}

export default AppManager;
