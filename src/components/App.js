import React from 'react';

import './App.less';

import ScreenFirst from './ScreenFirst';
import OurRealizedProjects from './OurRealizedProjects';
import MainThingForUsInSaunas from './MainThingForUsInSaunas';
import ScreenCalculator from './ScreenCalculator';

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
                <ScreenCalculator />
            </div>          
        )
    }
}

export default App;
