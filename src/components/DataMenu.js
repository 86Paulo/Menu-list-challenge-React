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
            <div className='container-menu'>
                <h1 className='menu'>Menu</h1>
                <div>
                {
                    items.map((item) => (
                    <ul key = { item.id }  className='menu-item'>
                        <h2>{ item.title } </h2>
                        <p>{ item.description }</p> 
                        <p>{ item.price }</p>
                        <p>{ item.type }</p>
                    </ul>
                        )) 
                }
                </div>
            </div>
        );
    }
}
 
export default DataMenu;
