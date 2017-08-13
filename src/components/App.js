import React from 'react';

import './App.less';

import ScreenFirst from './ScreenFirst';
import OurRealizedProjects from './OurRealizedProjects';
import MainThingForUsInSaunas from './MainThingForUsInSaunas';
import ScreenCalculator from './ScreenCalculator';
import BeforeBuildSauna from './BeforeBuildSauna';
import ScreenReviews from './ScreenReviews';
import ScreenMap from './ScreenMap';
import Footer from './Footer';

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
                <BeforeBuildSauna />
                <ScreenReviews />
                <ScreenMap />
                <Footer />
            </div>          
        )
    }
}

export default App;
