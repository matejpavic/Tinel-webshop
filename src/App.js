import { Component } from 'react';
import './styles/main.css';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import PropTypes from 'prop-types';

import Header from './components/Header';
import Page from './containers/Page';
import WorkshopDetails from './components/WorkshopDetails'
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      workshops: [],
      displayed: 9,
      loadLink: true,
      showMenu: false,
      showCart: false,
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/workshops")
    .then(response => response.json())
    .then(items => {this.setState({ workshops: items});
    });
  }

  handleDisplayed = () => {
    this.setState({displayed: this.state.workshops.length});
    this.setState({loadLink: false});
  } 

  handleShowMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }
  
  handleShowCart = () => {
    this.setState({showCart: !this.state.showCart});
  } 

  render() {
    const {workshops, displayed, loadLink, showMenu, showCart} = this.state;
    return (
      <div className='App'>
        <HashRouter basename='/'>
          <Header showCart={showCart} handleShowCart={this.handleShowCart} />
            <Switch>
              <Route exact path="/">
              <Page 
                workshops = {workshops} 
                displayed={displayed} 
                handleDisplayed={this.handleDisplayed} 
                loadLink = {loadLink} 
                handleShowMenu={this.handleShowMenu} 
                showMenu={showMenu}/>
              </Route>
              <Route exact path="/details/">
                <WorkshopDetails />
              </Route>
            </Switch>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  handleShowMenu: PropTypes.func.isRequired,
  displayed: PropTypes.number.isRequired,
  loadLink: PropTypes.bool.isRequired,
  showCart: PropTypes.bool.isRequired
};

export default App;
