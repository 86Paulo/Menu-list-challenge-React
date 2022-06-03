import React, { Component } from 'react';
import '../styles/Menu.css';

class DataMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }
    // Get the data from the API
    componentDidMount() {
        fetch('https://studiographene-exercise-api.herokuapp.com/foods')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    items: json,
                });
            })
        }

    render() { 
        const { items } = this.state;
        return (
            <div className='container'>
                <div className='menu'>
                    <h1>our menu</h1>
                    <h3>know more</h3>
                </div>
                <div className='menu-container'>
                    <div className='menu-item-container'>
                    {
                    items.map((item) => (
                        <ul key = { item.id } id = {item.id}  className='menu-item'>
                            <div className='dish-item'>
                                <h2>{ item.title } </h2>
                            </div>
                            <div className='description-item'>
                                <p>{ item.description }</p>
                            </div> 
                            <div className='price-type-item'>
                                <p>{ item.price } $</p>
                                <p>{ item.type }</p>
                            </div>
                        </ul>
                        )) 
                }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DataMenu;
