import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Technologies/>

        </div>
    );
}
const Header = () => {
    return (
        <>
            <div>Header</div>
            <a>1</a>
            <a>2</a>
            <a>3</a>
        </>
    )
}
const Technologies = () => {
    return (
        <ul>
            <li>CSS</li>
            <li>Redux</li>
            <li>React</li>
        </ul>
    )
}


export default App;
