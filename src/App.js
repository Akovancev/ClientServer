import React from 'react';
import { Main } from './components/Main/Main';
import { Edit } from './components/Edit/Edit';
import { Create } from './components/Create/Create';
import { Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container';

const url = "http://localhost:8000/emp"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(commits => this.setState({ data: commits }))
  }

  componentDidUpdate() {
    fetch(url)
      .then(response => response.json())
      .then(commits => this.setState({ data: commits }))
  }

  render() {
    return (
      <Container maxWidth="sm">
        <Switch>
          <Route path="/edit/:id?">
            {this.state.data.length === 0 ? <div>Loading...</div>
              : <Edit data={this.state.data} />}
          </Route>
          <Route path="/">
            <Create />
            <Main data={this.state.data} handleEdit={this.handleEdit} />
          </Route>
        </Switch>
      </Container>
    )
  }
}
