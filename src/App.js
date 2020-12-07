import './styles/main.css';
import Page from './containers/Page';
import Footer from './components/Footer';
import Header from './components/Header';
import { Component } from 'react';

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
    console.log(this.state.workshops)});
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
        <Header />
        <Page 
        workshops = {workshops} 
        displayed={displayed} 
        handleDisplayed={this.handleDisplayed} 
        loadLink = {loadLink} 
        handleShowMenu={this.handleShowMenu} 
        showMenu={showMenu}/>
        <Footer />
      </div>
    );
  }
}

export default App;
