import React from 'react';
import { connect } from "react-redux";

import { setCurrentReview } from "../../actions/reviewsActions";

import ReactTouchEvents from "react-touch-events";
import ScrollableAnchor, { goToTop, goToAnchor, removeHash } from 'react-scrollable-anchor';

import './ScreenReviews.less';

@connect((store) => {
    return {
        reviews: store.reviews.reviews,
    };
})

class ScreenReviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            orderDeparture: {
                name: '',
                phone: '',
                address: ''
            },
            isVisibleOrderDeparture: false,
            textButton: ['Заказать выезд', 'Отправка...', 'Отправлено!'],
        };
    }

    componentWillMount() {
        this.setState({
            textButton: this.initialState.textButton[0]
        });
    }

    handleClickReviewsItem(item, direction) {
        let s, _direction = direction || 'left';
        if(_direction === 'right') {
            s = (item.id === this.props.reviews.slice(0)[0].id) ? this.props.reviews.slice(-1)[0].id : item.id - 1;
        } else if(_direction === 'left') {
            s = (item.id === this.props.reviews.slice(-1)[0].id) ? 1 : item.id + 1;
        }        
        let list = this.props.reviews.map(m => {
            if(m.id === s) {
                return {...m, isActive: true}
            } else {
                return {...m, isActive: false}
            }
        }) ;       
        this.props.dispatch(setCurrentReview(list));
        this.scrollStartScreen();
    }

    scrollStartScreen() {
        goToAnchor('ScreenReviewsScrollToStartScreen');
    }

    scrollDirect() {
        goToAnchor('DirectScroll');
    }

    handleClickNavigationItem(item) {
        let list = this.props.reviews.map(m => {
            if(m.id === item.id) {
                return {...m, isActive: true}
            } else {
                return {...m, isActive: false}
            }
        })    ;    
        this.props.dispatch(setCurrentReview(list));
        this.scrollStartScreen();
    }

    reviewsNavigation() {
        return this.props.reviews.map((m, i) => {
            return <span 
                    key={i} 
                    className={ m.isActive ? 'active' : '' }
                    onClick={ () => this.handleClickNavigationItem(m) } />
        })
    }
    
    handleSwipe(item, direction) { 
        switch (direction) {
            case "top":
                break;
            case "bottom":
                break;
            case "left":
                this.handleClickReviewsItem(item, 'left');
                break;
            case "right":
                this.handleClickReviewsItem(item, 'right');
                break;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.orderDeparture)
        this.setState({
            isVisibleOrderDeparture: !this.state.isVisibleOrderDeparture,
            orderDeparture: this.initialState.orderDeparture,
            textButton: this.initialState.textButton[1]
        });
        setTimeout( () => this.sendSuccess(), 2000 )
    }

    sendSuccess() {
        this.setState({
            textButton: this.initialState.textButton[2]
        });
        setTimeout( () => this.sendInitial(), 2000 )
    }

    sendInitial() {
        this.setState({
            textButton: this.initialState.textButton[0]
        });
    }

    handleChangeField(e) {
        this.setState({
            orderDeparture: {
                ...this.state.orderDeparture,
                [e.target.name]: e.target.value
            }
        });
    }

    isVisibleOrderDeparture() {
        this.setState({
            isVisibleOrderDeparture: !this.state.isVisibleOrderDeparture
        });
        this.scrollDirect();
    }

    render() {
        return (            
            <div className="screen" id="ScreenReviews">
            
                <ScrollableAnchor id={'ScreenReviewsScrollToStartScreen'}>
                    <div></div>
                </ScrollableAnchor>
            
                <div className="container">
                    <h2 className="title-screen">отзывы<br/>наших клиентов</h2>
                </div>

                { this.props.reviews.filter(f => f.isActive).map((m, i) => {

                    return <ReactTouchEvents
                            key={i} 
                            onTap={ () => this.handleClickReviewsItem(m) }
                            onSwipe={ this.handleSwipe.bind(this, m) }>
                                <div  
                                onClick={ () => this.handleClickReviewsItem(m) }                               
                                className="reviews-item">
                                    <div className="reviews-item_image">
                                       <img src={m.image || '/assets/ScreenReviews/defaultImage.jpg'} />
                                    </div>
                                    <div className="reviews-item_message">
                                        <h3>{ m.name || 'Неизвестный пользователь' }</h3>
                                        <p>{ m.message || 'Спасибо за то, что вы есть' }</p>
                                    </div>
                                </div>
                            </ReactTouchEvents>

                }) }

                <div className="reviews-navigation">
                    { this.reviewsNavigation() }
                </div>

                <ScrollableAnchor id={'DirectScroll'}>
                    <div className="container center">
                        <div className="direct">
                            <div className="direct_wrap">
                                <h3>Выезд специалиста<br />на объект <span>БЕСПЛАТНО!!!</span></h3>
                                <ul className="direct_list">
                                    <li>Произведем все необходимые замеры</li>
                                    <li>Проконсультируем по подготовке помещения</li>
                                    <li>Поможем в выборе оборудования и материалов</li>
                                </ul>
                                <button 
                                className={ this.state.isVisibleOrderDeparture ? 'order-out hide' : 'order-out' }
                                onClick={this.state.textButton === this.initialState.textButton[0] ? this.isVisibleOrderDeparture.bind(this) : null}>
                                    { this.state.textButton }
                                </button>

                                <form 
                                className={ this.state.isVisibleOrderDeparture ? 'formOrderDeparture open' : 'formOrderDeparture' } 
                                id="orderDeparture"
                                onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="row group">
                                        <span>Имя</span>
                                        <input 
                                        name="name" 
                                        value={this.state.orderDeparture.name}
                                        onChange={this.handleChangeField.bind(this)} />
                                    </div>
                                    <div className="row group">
                                        <span>Телефон</span>
                                        <input 
                                        name="phone" 
                                        value={this.state.orderDeparture.phone}
                                        onChange={this.handleChangeField.bind(this)} />
                                    </div>
                                    <div className="row group">
                                        <span>Адрес</span>
                                        <textarea 
                                        name="address" 
                                        value={this.state.orderDeparture.address}
                                        onChange={this.handleChangeField.bind(this)} />
                                    </div>
                                    <div>
                                        <button id="sendFormOrderDeparture" className="order-out">Отправить</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </ScrollableAnchor>
            </div>        
        )
    }
}

export default ScreenReviews;