import React, {Component} from 'react';
import './App.css';
import Persons from "../components/Persons/Persons";

class App extends Component {
    state = {
        persons: [
            {id: 'whugeinwecfne', name: 'Javier', age: 26},
            {id: 'dglhsdiufheai', name: 'Julio', age: 27}
        ],
        showPersons: false
    };

    deletePersonHandler = (index) => {
        // Copy array to respect inmutability
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    togglePersonHandler = () => {
        const show = this.state.showPersons;
        this.setState({showPersons: !show});
    };

    nameChangedHandler = (event, id) => {
        const index = this.state.persons.findIndex((p => p.id === id));
        // Copy object
        // const person = Object.assign({}, this.state.persons[index]);
        const person = {...this.state.persons[index]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[index] = person;
        this.setState({persons: persons});
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '2px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons persons={this.state.persons}
                             clicked={this.deletePersonHandler}
                             changed={this.nameChangedHandler}/>
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                {/*onClick arrow functions might be slow*/}
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Show Persons
                </button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'},
        //     React.createElement('h1', null, 'Hi, I\'m a React App!!!!'))
    }
}

export default App;
