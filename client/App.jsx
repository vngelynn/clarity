import React, {Component} from 'react';
import MainContainer from './containers/MainContainer';
import './scss/application.scss';

class App extends Component {
    render() {
      return (
        <div id="app">
            <MainContainer />
        </div>
      )
    }
};

export default App;

