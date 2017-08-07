import React from 'react';

import './App.less';

import ScreenFirst from './ScreenFirst';
import OurRealizedProjects from './OurRealizedProjects';
import MainThingForUsInSaunas from './MainThingForUsInSaunas';

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
                <MainThingForUsInSaunas />
            </div>          
        )
    }
}

export default App;
