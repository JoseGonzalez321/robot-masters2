import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Table from 'react-bootstrap/lib/Table'
import Image from 'react-bootstrap/lib/Image'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  getData(url) {
    axios.get(url) 
         .then(({data}) => {
           this.setState({robots : data});
           console.log(this.state.robots);
         });
  }

 componentDidMount() {   
   this.getData('https://megaman-robot-masters.herokuapp.com/');
 }

  render() {

    const { robots } = this.state;

    return (
      <div className="App">
        <Table striped bordered condensed hover className="colorBlack">
          <thead>
            <tr>
              <th>Pic</th>
              <th>Name</th>
              <th>Weapon</th>
              <th>Weakness</th>
            </tr>                          
          </thead>
          <tbody>
            {robots.map((robot, index) =>(
              <tr key={robot.id}>
                <td>
                  <Image src={robot.avatar} className="imgHeight" circle />
                </td>
                <td>
                  {robot.name}
                </td>
                <td>
                  {robot.weapon}
                </td>
                <td>
                  {robot.weakness}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );  
  }
}

export default App;
