import React from 'react';

import './ScreenReviews.less';

class ScreenReviews extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            reviewsList: [
                {id: 1, isActive: true, image: null, name: 'Иван Иванович', message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.'},
                {id: 2, isActive: false, image: '/assets/ScreenReviews/02.jpg', name: 'Аленушка', message: 'Жили-были старик да старуха, у них была дочка Алёнушка да сынок Иванушка. Старик со старухой умерли. Остались Аленушка да Иванушка одни-одинешеньки. Пошла Аленушка на работу и братца с собой взяла. Идут они по дальнему пути, по широкому полю, и захотелось Иванушке пить.'},
                {id: 3, isActive: false, image: '/assets/ScreenReviews/01.jpg', name: null, message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.'},
                {id: 4, isActive: false, image: '/assets/ScreenReviews/04.jpg', name: 'Елена Дмитриевна', message: null},
                {id: 5, isActive: false, image: '/assets/ScreenReviews/01.jpg', name: 'Константин Константинович', message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}
            ]
        };
    }

    handleClickReviewsItem(item) {
        let s = item.id === this.state.reviewsList.slice(-1)[0].id ? 1 : item.id + 1
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
        let elmnt = document.getElementById("ScreenReviews");
        scrollTo(document.body, elmnt.offsetTop, 100);
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

    render() {
        return (
            <div className="screen" id="ScreenReviews">

                <div className="container">
                    <h2 className="title-screen">отзывы<br/>наших клиентов</h2>
                </div>

                { this.state.reviewsList.filter(f => f.isActive).map((m, i) => {
                    return <div 
                            key={i} 
                            className="reviews-item"
                            onClick={ () => this.handleClickReviewsItem(m) }>
                            <div className="reviews-item_image">
                               <img src={m.image || '/assets/ScreenReviews/defaultImage.jpg'} />
                            </div>
                            <div className="reviews-item_message">
                                <h3>{ m.name || 'Неизвестный пользователь' }</h3>
                                <p>{ m.message || 'Спасибо за то, что вы есть' }</p>
                            </div>
                        </div>
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