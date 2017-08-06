import React from 'react';

import './ScreenFirst.less';

class ScreenFirst extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            background: true
        };
    }

    render() {
        return (
            <div className="screen" id="ScreenFirst">

                <div className="screen__header">
                    <div className="container">
                        <div className="screen__header_logo">
                            <img src="/libs/img/logo.png" width="153" />
                        </div>
                        <div className="screen__header_phone">
                            <div className="row">
                                <i className="fa fa-phone" />
                                <a href="tel:74952150546">+7(495) 215-05-46</a>
                            </div>
                            <span className="screen__header_phone_back-call">Заказать звонок</span>
                        </div>
                        <div className="screen__header_social-link">
                            <a href="#" className="fa fa-vk" title="vk"></a>
                            <a href="#" className="fa fa-facebook-square" title="facebook"></a>
                            <a href="#" className="fa fa-instagram" title="instagram"></a>
                            <a href="#" className="fa fa-google-plus-square" title="google plus"></a>
                        </div>
                    </div>
                </div>

                <div>
                    &nbsp;
                </div>

                <div>
                    &nbsp;
                </div>

                <div>
                    &nbsp;
                </div>

                <div className="screen__center">
                    <div className="float-right">
                        <h1 className="title-page">Строительство<br/>и отделка<br/>саун <small>«под ключ»</small></h1>
                        <p className="description">в москве и <nobr>московской области</nobr></p>
                    </div>
                </div>

                <div className="screen__footer">

                    <div className="container">
                        <button className="what-price">Узнать стоимость</button>
                    </div>

                    <div className="container">
                        <div className="feature">
                            <img src="/assets/features/feature_01.png" />
                            <p className="name">14 лет<br/>успешной<br/>работы</p>
                        </div>
                        <div className="feature">
                            <img src="/assets/features/feature_02.png" />
                            <p className="name">Точный<br/>расчет<br/>стоимости</p>
                        </div>
                        <div className="feature">
                            <img src="/assets/features/feature_03.png" />
                            <p className="name">Гарантия на<br/>работы и<br/>оборудование<br/>от 2-х лет</p>
                        </div>
                    </div>

                    <div className="container"><img src="/libs/img/icon-mouse.png" className="mouse" /></div>

                </div>

            </div>          
        )
    }
}

export default ScreenFirst;