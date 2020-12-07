import { Component } from 'react';
import './styles/main.css';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
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
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/workshops")
    .then(response => response.json())
    .then(items => {this.setState({ workshops: items});
    //just checking if fetch and filter work properly
    console.log(this.state.workshops.filter(specif => specif.category === "frontend"))});
  }

  handleDisplayed = () => {
    this.setState({displayed: this.state.workshops.length});
    this.setState({loadLink: false});
  } 

  handleShowMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  } 
  render() {
    const {workshops, displayed, loadLink, showMenu} = this.state;
    return (
      <div className='App'>
        <HashRouter basename='/'>
          <Header />
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

export default App;
