import React from 'react';

import ReactTouchEvents from "react-touch-events";
import ScrollableAnchor, { goToTop, goToAnchor, removeHash } from 'react-scrollable-anchor';

import './ScreenReviews.less';

class ScreenReviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            reviewsList: [
                {id: 1, isActive: true, image: null, name: 'Иван Иванович', message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'},
                {id: 2, isActive: false, image: null, name: 'Аленушка', message: 'Жили-были старик да старуха, у них была дочка Алёнушка да сынок Иванушка. Старик со старухой умерли. Остались Аленушка да Иванушка одни-одинешеньки. Пошла Аленушка на работу и братца с собой взяла. Идут они по дальнему пути, по широкому полю, и захотелось Иванушке пить.'},
                {id: 3, isActive: false, image: '/assets/ScreenReviews/01.jpg', name: null, message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'},
                {id: 4, isActive: false, image: '/assets/ScreenReviews/04.jpg', name: 'Елена Дмитриевна', message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
                {id: 5, isActive: false, image: '/assets/ScreenReviews/01.jpg', name: 'Константин Константинович', message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}
            ]
        };
    }

    handleClickReviewsItem(item, direction) {
        let s, _direction = direction || 'left';
        if(_direction === 'right') {
            s = (item.id === this.state.reviewsList.slice(0)[0].id) ? this.state.reviewsList.slice(-1)[0].id : item.id - 1;
        } else if(_direction === 'left') {
            s = (item.id === this.state.reviewsList.slice(-1)[0].id) ? 1 : item.id + 1;
        }        
        let list = this.state.reviewsList.map(m => {
            if(m.id === s) {
                return {...m, isActive: true}
            } else {
                return {...m, isActive: false}
            }
        }) ;       
        this.setState({
            reviewsList: list
        });
        this.scrollStartScreen();
    }

    scrollStartScreen() {
        // let elmnt = document.getElementById("ScreenReviews");
        // scrollTo(document.body, elmnt.offsetTop, 100);
        goToAnchor('ScreenReviewsScrollToStartScreen');
    }

    handleClickNavigationItem(item) {
        let list = this.state.reviewsList.map(m => {
            if(m.id === item.id) {
                return {...m, isActive: true}
            } else {
                return {...m, isActive: false}
            }
        })    ;    
        this.setState({
            reviewsList: list
        });
        this.scrollStartScreen();
    }

    reviewsNavigation() {
        return this.state.reviewsList.map((m, i) => {
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

    render() {
        return (            
            <div className="screen" id="ScreenReviews">
                <ScrollableAnchor id={'ScreenReviewsScrollToStartScreen'}>
                    <div className="container">
                        <h2 className="title-screen">отзывы<br/>наших клиентов</h2>
                    </div>
                </ScrollableAnchor>

                { this.state.reviewsList.filter(f => f.isActive).map((m, i) => {

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

                <div className="container center">
                    <div className="direct">
                        <div className="direct_wrap">
                            <h3>Выезд специалиста<br />на объект <span>БЕСПЛАТНО!!!</span></h3>
                            <ul className="direct_list">
                                <li>Произведем все необходимые замеры</li>
                                <li>Проконсультируем по подготовке помещения</li>
                                <li>Поможем в выборе оборудования и материалов</li>
                            </ul>
                            <button className="order-out">Заказать выезд</button>
                        </div>
                    </div>
                </div>
            </div>        
        )
    }
}

export default ScreenReviews;