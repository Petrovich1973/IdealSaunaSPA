import React from 'react';

import ScrollableAnchor, { goToTop, goToAnchor, removeHash } from 'react-scrollable-anchor';
import InputMask from 'react-input-mask';

import './ScreenFirst.less';

class ScreenFirst extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            orderPhoneCall: {
                name: '',
                phone: '',
                agreement: true
            },
            isVisibleOrderPhoneCall: false
        };
    }

    scrollToFinishedProjects() {
        goToAnchor('FinishedProjectsScrollToStartScreen');
    } 

    handleSubmit(e) {
        e.preventDefault();
        const { orderPhoneCall } = this.state;
        if(orderPhoneCall.agreement && orderPhoneCall.name.length && orderPhoneCall.phone.replace(/[^\d]/ig, '').length === 11) {
            console.log(orderPhoneCall);
            this.setState({
                isVisibleOrderPhoneCall: !this.state.isVisibleOrderPhoneCall,
                orderPhoneCall: this.initialState.orderPhoneCall
            });
        }
    }

    handleChangeField(e) {        
        this.setState({
            orderPhoneCall: {
                ...this.state.orderPhoneCall,
                [e.target.name]: e.target.value.trim()
            }
        });
    }

    handleChangeChecked(e) {
        this.setState({
            orderPhoneCall: {
                ...this.state.orderPhoneCall,
                [e.target.name]: e.target.checked
            }
        });
    }

    isVisibleOrderPhoneCall() {
        this.setState({
            isVisibleOrderPhoneCall: !this.state.isVisibleOrderPhoneCall
        });
    }

    render() {
        const { orderPhoneCall } = this.state;
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
                            <span
                                className="screen__header_phone_back-call"
                                onClick={this.isVisibleOrderPhoneCall.bind(this)}
                            >
                                Заказать звонок
                            </span>
                        </div>
                        <div className="screen__header_catalog-link">
                            <a href="https://idealsauna.ru/catalogue/pechi-dlya-bani-i-sauny">Печи для бани и сауны</a>
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
                        <div className={this.state.isVisibleOrderPhoneCall ? 'formOrderPhoneCall open' : 'formOrderPhoneCall'}>
                            <form
                                id="orderPhoneCall"
                                onSubmit={this.handleSubmit.bind(this)}
                            >
                                <h4>Заказать звонок</h4>
                                <div className="row group">
                                    <span>Имя</span>
                                    <input
                                    name="name" 
                                    value={orderPhoneCall.name} 
                                    onChange={this.handleChangeField.bind(this)}
                                    autoComplete="off" />
                                </div>
                                <div className="row group">
                                    <span>Телефон</span>
                                    <InputMask 
                                    {...this.props} 
                                    name="phone"
                                    value={orderPhoneCall.phone}
                                    onChange={this.handleChangeField.bind(this)}
                                    mask="+7(999) 999 99 99" 
                                    maskChar=" "
                                    autoComplete="off" />
                                </div>
                                <div className="row group check">
                                    <label>
                                        <input 
                                        type="checkbox" 
                                        name="agreement"
                                        checked={ orderPhoneCall.agreement }
                                        onClick={this.handleChangeChecked.bind(this)} />
                                        &nbsp;
                                        <span>Согласен на обработку персональных данных</span>
                                    </label>
                                    <a className="link" href="https://idealsauna.ru/private-politika/" target="_blank">Соглашение на обработку персональных данных</a>
                                </div>
                                <div>
                                    <button 
                                    id="sendFormOrderPhoneCall" 
                                    disabled={ orderPhoneCall.agreement && orderPhoneCall.name.length && orderPhoneCall.phone.replace(/[^\d]/ig, '').length === 11 ? false : true }
                                    className="order-out">Отправить</button>
                                </div>
                            </form>
                        </div>
                        <div className={!this.state.isVisibleOrderPhoneCall ? 'titleBlock open' : 'titleBlock'}>
                            <h1 className="title-page">Строительство<br />и отделка<br />саун <small>«под ключ»</small></h1>
                            <p className="description">в москве и <nobr>московской области</nobr></p>
                            <div className="screen__center_phone">
                                <i className="fa fa-phone" />
                                <a href="tel:74952150546">+7(495) 215-05-46</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="screen__footer">

                    <div className="container">
                        <button
                            className="what-price"
                            onClick={this.scrollToFinishedProjects}
                        >
                            Узнать стоимость
                        </button>
                    </div>

                    <div className="container">
                        <div className="feature">
                            <img src="/assets/images/features/feature_01.png" />
                            <p className="name">14 лет<br />успешной<br />работы</p>
                        </div>
                        <div className="feature">
                            <img src="/assets/images/features/feature_02.png" />
                            <p className="name">Точный<br />расчет<br />стоимости</p>
                        </div>
                        <div className="feature">
                            <img src="/assets/images/features/feature_03.png" />
                            <p className="name">Гарантия на<br />работы и<br />оборудование<br />от 2-х лет</p>
                        </div>
                    </div>

                    <div className="container">
                        <img
                            src="/libs/img/icon-mouse.png"
                            className="mouse"
                            onClick={this.scrollToFinishedProjects}
                        />
                    </div>

                </div>

            </div>
        );
    }
}

ScreenFirst.displayName = 'ScreenFirst';

export default ScreenFirst;