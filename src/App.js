import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './themes/globalStyles';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Deals from './pages/Deals';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact /> 
        <Route path='/deals' component={Deals} exact /> 
      </Switch>
    </Router>
  );
}

export default App;
