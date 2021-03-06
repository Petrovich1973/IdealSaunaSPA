import React from 'react';

import './App.less';

import ScreenFirst from './ScreenFirst';
import FinishedProjects from './FinishedProjects';
import MainThingForUsInSaunas from './MainThingForUsInSaunas';
import ScreenCalculator from './ScreenCalculator';
import BeforeBuildSauna from './BeforeBuildSauna';
import ScreenReviews from './ScreenReviews';
import ScreenMap from './ScreenMap';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <ScreenFirst />
                <FinishedProjects />
                <MainThingForUsInSaunas />
                <ScreenCalculator />
                <BeforeBuildSauna />
                <ScreenReviews />
                <ScreenMap />
                <Footer />
            </div>
        );
    }
}

App.displayName = 'App';

export default App;
