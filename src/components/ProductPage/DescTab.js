import React, {Component} from 'react';
import './ProductPage.css';


class DescTab extends Component {

    constructor(props) {
        super();
        this.state = {
            currentProduct: {},
            loading: true
        };
    }

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

    render(){
        return (
            <div className={'content'}>

                {this.state.loading?

                    <div>Loading...</div>
                    :
                    <div>
                        {this.state.loading?

                            <div>Loading...</div>
                            :
                            <div>
                        <p>{this.state.currentProduct.hdl}</p>
                        <p>{this.state.currentProduct.kw}</p>
                        <p>{this.state.currentProduct.name}</p>
                            </div>}
                    </div>

                }

            </div>
        );
    }
}


export default DescTab;
