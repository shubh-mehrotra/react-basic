import './App.css';
import Nav from './components/Nav';
import Pics from './components/Pics';
import About from './components/About';
import Detail from './components/Detail';
import StoreList from './components/StoreList';
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
                    <Route path="/stores" exact component={StoreList} />
                    <Route path="/stores/:id" component={StoreDescription} />
                </Switch>

                {/* <Detail testProp="test-prop" helloAlert={helloAlert}><br />This is children</Detail> */}
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
