import React from 'react';

import classNames from 'classnames';

import './ScreenMap.less';

class ScreenMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            isBoxVisible: true
        };
    }
    componentDidMount() {
        ymaps.ready(init);

        function init () {
            let myMap = new ymaps.Map('ScreenMap', {
                center:[55.59227, 37.598450],
                zoom:16
            }),            
            myPlacemark = new ymaps.Placemark([55.59227, 37.598450], {
                iconContent: "<img src='/libs/img/favicon.png' width='16' />",
                balloonContentHeader: "<img src='/libs/img/favicon.png' width='16' /> «IdealSauna»",
                balloonContentBody: "Строительство саун и бань любой сложности",
                balloonContentFooter: "Москва, Варшавское шоссе, д.152к1"
            });

            myMap.controls
                .add('zoomControl', { left: 5, top: 5 })
                .add('typeSelector')
                .add('mapTools', { left: 35, top: 5 });

            myMap.geoObjects.add(myPlacemark);

        }
    }

    handleClickClose() {
        this.setState({
            isBoxVisible: !this.state.isBoxVisible
        })
    }

    render() {
        let isBoxVisible = classNames({
                'contacts-box': true,
                'hide': !this.state.isBoxVisible
            }),
            isBtn = classNames({
                    'fa fa-chevron-right': this.state.isBoxVisible,
                    'fa fa-chevron-left': !this.state.isBoxVisible
                }),
            isBtnText = classNames({
                    'text': true,
                    'collapse': this.state.isBoxVisible
                });
        return (
            <div className="screen" id="ScreenMap">
                <div className={ isBoxVisible }>
                    <h2 className="title-screen">Контакты</h2>
                    <ul className="contacts-items">
                        <li>
                            <img src="/libs/img/contact-icon_01.png" className="contacts-icon" />
                            <p><strong>Интернет-магазин</strong></p>
                            <p>Тел.: 8 (905) 528-72-02 (Александр)</p>
                        </li>
                        <li>
                            <img src="/libs/img/contact-icon_02.png" className="contacts-icon" />
                            <p><strong>Строительство</strong></p>
                            <p>Тел.: 8 (905) 528-72-02 (Александр)</p>
                        </li>
                        <li>
                            <img src="/libs/img/contact-icon_03.png" className="contacts-icon" />
                            <p><strong>Электронная почта</strong></p>
                            <p>zakaz@idealsauna.ru (Интернет-магазин)</p>
                            <p>build@idealsauna.ru (Строительный отдел)</p>
                            <p>info@idealsauna.ru (По любым вопросам)</p>
                        </li>
                        <li>
                            <img src="/libs/img/contact-icon_04.png" className="contacts-icon" />
                            <p><strong>Режим работы</strong></p>
                            <p>Приём звонков ежедневно: с 9:00 до 20:00</p>
                            <p>Офис работает Пн-Пт с 9.00 до 19.00</p>
                        </li>
                        <li>
                            <img src="/libs/img/contact-icon_05.png" className="contacts-icon" />
                            <p><strong>Адрес офиса</strong></p>
                            <p>г. Москва, Варшавское шоссе, д.152, к.1, оф 15. (Вход со двора).</p>
                            <p>Необходимо заранее согласовать встречу.</p>
                        </li>
                    </ul>
                </div>
                <span 
                className="contacts-box_close" 
                onClick={ () => this.handleClickClose() }><i className={ isBtn } /></span>
            </div>          
        )
    }
}

export default ScreenMap;