import React from 'react';
import './App.css';
import CardList from './components/card-list/CardList'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({monsters: data}))
  }

  render() {
    return (
      <div className="App">
        <CardList>
        {this.state.monsters.map(user => <h1 key={user.id}> {user.name} </h1> )}
        </CardList>
      </div>
    )
  }
}

export default App;
