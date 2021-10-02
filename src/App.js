import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import NewDestination from "./js/components/NewDestination";
import Destination from "./js/components/Destination";
import {getDestination} from "./js/api/destinations";
// import logo from './logo.svg';
import './App.css';

function App() {
    const [destinations, setDestination] = useState([]);
    useEffect(() => {
        getDestination(setDestination);
    }, []);

    const handleAddNewDestination = destinations => {
        setDestination(prevDestination => {
            return [
                destinations,
                ...prevDestination
            ];
        });
    };

    const handleRemoveDestination = id => {
        setDestination(prevState => prevState.filter(destinations => destinations.id !== id));
    }

    return (
        <>
            <h1>hej</h1>
            {destinations.map(destinations => {
                return <Destination key ={destinations.id} {...destinations} onRemoveDestination={handleRemoveDestination}/>;
            })}

        </>
    );
}
export default App;

ReactDOM.render(<App/>, document.querySelector("#root"));
//     <div className="App">
//         <header className="App-header">
//             {/*<img src={logo} className="App-logo" alt="logo" />*/}
//             <p>
//                 Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 {/*Learn React*/}
//             </a>
//         </header>
//     </div>