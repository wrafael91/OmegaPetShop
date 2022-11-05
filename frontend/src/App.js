/* import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
    </div>
  );
}

export default App;
 */
import React, { Component } from 'react';
import AdminLTE, { Sidebar, Content, Row, Col, Box, Button } from 'adminlte-2-react';

const { Item } = Sidebar;

class HelloWorld extends Component {
  state = {}

  render() {
    return (<Content title="Pet Shop Omega" subTitle="Donde encontraras todo para mejor Amigo" browserTitle="Hello World">
      <Row>
        <Col xs={6}>
          <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Agregar al carrito" />}>
            Hello World
          </Box>
        </Col>
        <Col xs={6}>
          <Box title="Another box">
            Content goes here
          </Box>
        </Col>
      </Row>
    </Content>);
  }
}

class App extends Component {

  sidebar = [
    <Item key="hello" text="Tienda" to="/hello-world" />
  ]

  render() {
    return (
      <AdminLTE title={["Pet Menu"]} titleShort={["He", "we"]} theme="purple" sidebar={this.sidebar}>
        <HelloWorld path="/hello-world" />
      </AdminLTE>
    );
  }

}


export default App;