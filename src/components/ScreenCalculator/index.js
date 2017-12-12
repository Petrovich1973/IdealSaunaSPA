import React from 'react';
import { connect } from "react-redux";

import { fetchCalculation, setChangeParameter, setChangeMaterial } from "../../actions/calculationActions";

import ReactTouchEvents from "react-touch-events";

import ScrollableAnchor, { goToTop, goToAnchor, removeHash } from 'react-scrollable-anchor';

import './ScreenCalculator.less';

@connect((store) => {
    return {
        calculation: store.calculation.calculation
    };
})

class ScreenCalculator extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchCalculation());
    }

    calculationTotal() {
        // if (!this.props.parameters) return 0;
        // let list = this.props.parameters;
        // let total = Object.keys(list).map(m => list[m]).reduce(function(a, b) {
        //   return +a * +b;
        // });
        // return (total / 1000 / 1000 * this.props.config).toFixed().replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");
        const { sizing, decoration, rack, oven, stones, lighting, refractory } = this.props.calculation;
        //////////
        let area = ((sizing.long * sizing.height * 2) + (sizing.width * sizing.height * 2) + (sizing.long * sizing.height)) / 10000; //m2
        let priceDecoration = decoration.filter(f => f.selected)[0].price;
        //////////
        let priceRack = rack.filter(f => f.selected)[0].price;
        //////////
        let priceOven = oven.filter(f => f.selected)[0].price;
        //////////
        let priceStones = stones.filter(f => f.selected)[0].price;
        //////////
        let priceLighting = lighting.filter(f => f.selected)[0].price;
        //////////
        let priceRefractory = refractory.filter(f => f.selected)[0].price;
        //////////

        let result = area * priceDecoration + priceRack + priceOven + priceStones + priceLighting + priceRefractory;
        console.log( result );

        return result;
    }

    handleChangeInput(event) {
        let name = event.target.name,
            value = parseInt(event.target.value);
        var reg = new RegExp('^[0-9]+$');
        if( reg.test(value) ) {
            this.props.dispatch(setChangeParameter({...this.props.calculation.sizing, [name]: value}));
        }
    }

    handleChangeInputBtn(name, action) {
        let act = action === 'increment' ? 1 : -1,
            value = +this.props.calculation.sizing[name] + act;
        if( value > 0 && value < 10000 ) {
            this.props.dispatch(setChangeParameter({...this.props.calculation.sizing, [name]: value}));
        }

    }

    handleChangeWalls(parent, element, action) {
        let list = this.props.calculation[parent];
        let act = action === 'increment' ? 1 : -1,
            currentIndex = list.map(m => m.selected).indexOf(element.selected) + act,
            nextElementIndex = () => {
                if(currentIndex > list.length -1) {
                    return 0;
                } else if(currentIndex < 0) {
                    return list.length - 1;
                }
                return currentIndex;
            },
            setUpdate = list.map((m, i) => {
                if(i === nextElementIndex()) {
                    return { ...m, selected: true };
                } else {
                    return { ...m, selected: false };
                }
            });
        this.props.dispatch(setChangeMaterial({...this.props.calculation, [parent]: setUpdate}));
    }

    sizingItem(item, name) {
        if (!this.props.calculation.sizing) return null;
        let value = this.props.calculation.sizing[item];
        return (
            <div className="controller">
                <div className="controller_name">{name}</div>
                <div className="controller_group">
                    <span
                        className="controller_btn left"
                        onClick={() => this.handleChangeInputBtn(item, 'decrement')}>
                        <i className="fa fa-minus" />
                    </span>
                    <span className="controller_input">
                        <input
                            name={item}
                            maxLength="4"
                            value={value}
                            onChange={this.handleChangeInput.bind(this)}/>
                    </span>
                    <span
                        className="controller_btn right"
                        onClick={() => this.handleChangeInputBtn(item, 'increment')}>
                        <i className="fa fa-plus" />
                    </span>
                </div>
            </div>
        );
    }

    materialItem(item, name) {
        if (!this.props.calculation) return null;
        let list = this.props.calculation[item];
        let currentElement = list.filter(f => f.selected)[0];
        return (
            <div className="controller">
                <div className="controller_name">{name}</div>
                <ReactTouchEvents
                    onTap={this.handleTap.bind(this)}
                    onSwipe={this.handleSwipe.bind(this, item, currentElement)}>
                    <div className="controller_pic" style={{ backgroundImage: `url(${currentElement.image})` }}></div>
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
        );
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

                <ScrollableAnchor id={'ScreenCalculatorScrollToStartScreen'}>
                    <div></div>
                </ScrollableAnchor>

                <div className="info-block">
                    <div className="float-right">
                        <div className="box-inline">
                            <h3>Постройте свою сауну с<br />профессионалами!</h3>
                            <p> Звоните по телефону <a href="tel:74952150546"><nobr>+7(495) 215-05-46</nobr></a></p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h2 className="title-screen">рассчитайте<br />стоимость<br />вашей сауны</h2>
                </div>

                <div className="container center">
                    <h3>Размер помещения:</h3>
                    <div className="controllers">

                        {this.sizingItem('long', 'Длина, см')}

                        {this.sizingItem('width', 'Ширина, см')}

                        {this.sizingItem('height', 'Высота, см')}

                    </div>
                </div>

                <div className="container separator"></div>

                <div className="container center">
                    <h3>Материалы и оборудования:</h3>
                    <div className="controllers row">

                        {this.materialItem('decoration', 'Отделка стен и потолка')}

                        {this.materialItem('rack', 'Расположение полок')}

                        {this.materialItem('oven', 'Печь')}

                        {this.materialItem('stones', 'Камни')}

                        {this.materialItem('lighting', 'Освещение')}

                        {this.materialItem('refractory', 'Отделка за печью')}

                    </div>
                </div>

                <div className="container center">
                    <h3>Итого: {this.calculationTotal()} руб.</h3>
                </div>

            </div>
        );
    }
}

ScreenCalculator.displayName = 'ScreenCalculator';

export default ScreenCalculator;