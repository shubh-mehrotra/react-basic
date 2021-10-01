import './App.css';
import Nav from './components/Nav';
import User from './components/User';
import Pics from './components/Pics';
import About from './components/About';
import StoreList from './components/StoreList';
import UserDetail from './components/UserDetail';
import StoreDescription from './components/StoreDescription';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    function helloAlert(val) {
        alert(val);
    }

    return (
        <Router>
            <div className="container">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/pics" component={Pics} />
                    <Route path="/users" exact component={User} />
                    <Route path="/users/:id" component={UserDetail} />
                    <Route path="/stores" exact component={StoreList} />
                    <Route path="/stores/:id" component={StoreDescription} />
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
)

export default App;
