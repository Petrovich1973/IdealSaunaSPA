import React from 'react';

class OurRealizedProjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            scrollTop: 0
        };
    }

    render() {
        const { scrollTop } = this.state;
        return (
            <div className="screen" id="OurRealizedProjects">
                <div className="container">OurRealizedProjects</div>
            </div>          
        )
    }
}

export default OurRealizedProjects;