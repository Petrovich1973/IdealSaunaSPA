import React from 'react';

import './App.less';

import ScreenFirst from './ScreenFirst';
import OurRealizedProjects from './OurRealizedProjects';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            scrollTop: 0
        };
    }

    render() {
        return (
            <div id="App">
                <ScreenFirst />
                <OurRealizedProjects />
            </div>          
        )
    }
}

export default App;
