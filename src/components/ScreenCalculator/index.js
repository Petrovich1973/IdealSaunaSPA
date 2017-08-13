import React from 'react';

import ReactTouchEvents from "react-touch-events";

import './ScreenCalculator.less';

class ScreenCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            calculationConfig: 3000,
            calculationParameters: {
                long: 200,
                width: 200,
                height: 200
            },
            setMaterials: {
                walls: [
                    {id: 1, selected: true, name: 'Канадский кедр', image: '/assets/controllerPics/01.jpg', price: 2300},
                    {id: 2, selected: false, name: 'Сибирский дуб', image: '/assets/controllerPics/02.jpg', price: 700},
                    {id: 3, selected: false, name: 'Сосна', image: '/assets/controllerPics/03.jpg', price: 900}
                ],
                rack: [
                    {id: 1, selected: true, name: 'Прямые', image: '/assets/controllerPics/02.jpg', price: 300},
                    {id: 2, selected: false, name: 'Каскадные', image: '/assets/controllerPics/03.jpg', price: 500},
                    {id: 3, selected: false, name: 'Вертикальные', image: '/assets/controllerPics/04.jpg', price: 800}
                ],
                furnace: [
                    {id: 1, selected: true, name: 'Деревяные', image: '/assets/controllerPics/03.jpg', price: 30000},
                    {id: 2, selected: false, name: 'Электрические', image: '/assets/controllerPics/04.jpg', price: 50000}
                ],
                stones: [
                    {id: 1, selected: true, name: 'Подарок', image: '/assets/controllerPics/04.jpg', price: 0},
                    {id: 2, selected: false, name: 'Эльфийские', image: '/assets/controllerPics/05.jpg', price: 5000},
                    {id: 3, selected: false, name: 'Астеройдные', image: '/assets/controllerPics/06.jpg', price: 10000}
                ],
                lighting: [
                    {id: 1, selected: true, name: 'Светильник', image: '/assets/controllerPics/05.jpg', price: 4000},
                    {id: 2, selected: false, name: 'Бра', image: '/assets/controllerPics/03.jpg', price: 5000},
                    {id: 3, selected: false, name: 'Торшер', image: '/assets/controllerPics/06.jpg', price: 6000}
                ],
                furnishBehind: [
                    {id: 1, selected: true, name: 'Талькомагнезит', image: '/assets/controllerPics/06.jpg', price: 4000},
                    {id: 2, selected: false, name: 'Талькохлорит', image: '/assets/controllerPics/02.jpg', price: 5000}
                ]
            }
        };
    }

    calculationTotal() {
        let list = this.state.calculationParameters;
        let total = Object.keys(list).map(m => list[m]).reduce(function(a, b) {
          return (+a) * (+b);
        });
        return (total / 1000 / 1000 * this.state.calculationConfig).toFixed().replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");
    }

    handleChangeInput(event) {
        let name = event.target.name,
            value = event.target.value;
        var reg = new RegExp('^[0-9]+$');
        if( reg.test(value) ) {
            this.setState({
                calculationParameters: {
                    ...this.state.calculationParameters,
                    [name]: value
                }
            });
        }
    }

    handleChangeInputBtn(key, action) {
        let act = (action === 'increment') ? 1 : -1,
            value = (+this.state.calculationParameters[key]) + act;
        if( value > 0 && value < 10000 ) {
            this.setState({
                calculationParameters: {
                    ...this.state.calculationParameters,
                    [key]: value
                }
            });
        }

    }

    sizingItem(item, name) {
        let value = this.state.calculationParameters[item];
        return <div className="controller">
            <div className="controller_name">{ name }</div>
            <div className="controller_group">
                <span 
                className="controller_btn left"
                onClick={() => this.handleChangeInputBtn(item, 'decrement')}>
                    <i className="fa fa-minus" />
                </span>
                <span className="controller_input">
                    <input 
                    name={ item }
                    maxLength="4"
                    value={ value }
                    onChange={ this.handleChangeInput.bind(this) } />
                </span>
                <span 
                className="controller_btn right"
                onClick={() => this.handleChangeInputBtn(item, 'increment')}>
                    <i className="fa fa-plus" />
                </span>
            </div>
        </div>
    }

    materialItem(item, name) {
        let list = this.state.setMaterials[item];
        let currentElement = list.filter(f => f.selected)[0];
        return <div className="controller">
                    <div className="controller_name">{ name }</div>
                    <ReactTouchEvents
                    onTap={ this.handleTap.bind(this) }
                    onSwipe={ this.handleSwipe.bind(this, item, currentElement) }
                    >
                        <div className="controller_pic" style={{backgroundImage: `url(${currentElement.image})`}}></div>
                    </ReactTouchEvents>
                    <div className="controller_group">
                        <span 
                        className="controller_btn left" 
                        onClick={() => this.handleChangeWalls(item, currentElement, 'decrement')}>
                            <i className="fa fa-chevron-left" />
                        </span>
                        <span className="controller_input">
                            <input className="sm" value={currentElement.name} readOnly />
                        </span>
                        <span 
                        className="controller_btn right" 
                        onClick={() => this.handleChangeWalls(item, currentElement, 'increment')}>
                            <i className="fa fa-chevron-right" />
                        </span>
                    </div>
                </div>
    }

    handleChangeWalls(parent, element, action) {
        let list = this.state.setMaterials[parent];
        let act = (action === 'increment') ? 1 : -1,
            currentIndex = list.map(m => m.selected).indexOf(element.selected) + act,
            nextElementIndex = () => {
                if(currentIndex > list.length -1) {
                    return 0
                } else if(currentIndex < 0) {
                    return list.length -1
                }
                return currentIndex
            },
            setUpdate = list.map((m, i) => {
                if(i === nextElementIndex()) {
                    return {...m, selected: true}
                } else {
                    return {...m, selected: false}
                }
            });
        this.setState({
            setMaterials: {
                ...this.state.setMaterials,
                [parent]: setUpdate
            }
        })
    }

    handleTap() {    
        console.log("you have taped me");    
    }
    
    handleSwipe(item, currentElement, direction) {    
        switch (direction) {
            case "top":
                break;
            case "bottom":
                break;
            case "left":
                this.handleChangeWalls(item, currentElement, 'decrement');
                break;
            case "right":
                this.handleChangeWalls(item, currentElement, 'increment');
                break;
        }
    }

    render() {
        return (
            <div className="screen" id="ScreenCalculator">

                <div className="info-block">
                    <div className="float-right">
                        <div className="box-inline">
                            <h3>Постройте свою сауну с<br/>профессионалами!</h3>
                            <p> Звоните по телефону <nobr>+7 (495) 215-05-46</nobr></p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h2 className="title-screen">рассчитайте<br/>стоимость<br/>вашей сауны</h2>
                </div>

                <div className="container center">
                    <h3>Укажите размер помещения: {this.state.setMaterials.sss}</h3>
                    <div className="controllers">

                        { this.sizingItem('long', 'Длина, см') }

                        { this.sizingItem('width', 'Ширина, см') }

                        { this.sizingItem('height', 'Высота, см') }
                        
                    </div>
                </div>

                <div className="container separator"></div>

                <div className="container center">
                    <h3>Материалы и оборудования:</h3>
                    <div className="controllers row">

                        { this.materialItem('walls', 'Отделка стен и потолка') }

                        { this.materialItem('rack', 'Расположение полок') }

                        { this.materialItem('furnace', 'Печь') }

                        { this.materialItem('stones', 'Камни') }

                        { this.materialItem('lighting', 'Освещение') }

                        { this.materialItem('furnishBehind', 'Отделка за печью') }

                    </div>
                </div>

                <div className="container center">
                    <h3>Итого: { this.calculationTotal() } руб.</h3>
                </div>

            </div>          
        )
    }
}

export default ScreenCalculator;