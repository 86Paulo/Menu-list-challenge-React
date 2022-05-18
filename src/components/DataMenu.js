import React, { Component } from 'react';
import '../styles/Menu.css';

class DataMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataIsLoaded: false
        };
    }

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
                    <h1>Menu</h1>
                </div>
                <div className='menu-container'>
                {
                    items.map((item) => (
                    <div>
                        <ul key = { item.id }  className='menu-item'>
                            <div className='dish-type-item'>
                                <h2>{ item.title } </h2>
                                <p>{ item.type }</p>
                            </div>
                            <div className='description-item'>
                                <p>{ item.description }</p>
                            </div> 
                            <div className='price-item'>
                                <p>{ item.price }</p>
                            </div>
                        </ul>
                    </div>
                        )) 
                }
                </div>
            </div>
        );
    }
}
 
export default DataMenu;
