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
                    <div>
                    {
                        items.map((item) => (
                        <div>
                            <ul key = { item.id }  className='menu-item'>
                                <h2>{ item.title } </h2>
                                <p>{ item.description }</p> 
                                <p>{ item.price }</p>
                                <p>{ item.type }</p>
                            </ul>
                        </div>
                            )) 
                    }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DataMenu;
