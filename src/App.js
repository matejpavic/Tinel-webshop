import './styles/main.css';
import Page from './containers/Page';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
