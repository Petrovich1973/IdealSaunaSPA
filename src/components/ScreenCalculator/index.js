import React from 'react';

import './ScreenCalculator.less';

class ScreenCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            background: true
        };
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
                    <h3>Укажите размер помещения:</h3>
                    <div className="controllers">
                        <div className="controller">
                            <div className="controller_name">Длина, см</div>
                            <div className="controller_group">
                                <span className="controller_btn left"><i className="fa fa-minus" /></span>
                                <span className="controller_input"><input defaultValue="200" /></span>
                                <span className="controller_btn right"><i className="fa fa-plus" /></span>
                            </div>
                        </div>
                        <div className="controller">
                            <div className="controller_name">Ширина, см</div>
                            <div className="controller_group">
                                <span className="controller_btn left"><i className="fa fa-minus" /></span>
                                <span className="controller_input"><input defaultValue="200" /></span>
                                <span className="controller_btn right"><i className="fa fa-plus" /></span>
                            </div>
                        </div>
                        <div className="controller">
                            <div className="controller_name">Высота, см</div>
                            <div className="controller_group">
                                <span className="controller_btn left"><i className="fa fa-minus" /></span>
                                <span className="controller_input"><input defaultValue="200" /></span>
                                <span className="controller_btn right"><i className="fa fa-plus" /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container separator"></div>

                <div className="container center">
                    <h3>Материалы и оборудования:</h3>
                    <div className="controllers row">
                        <div className="controller">
                            <div className="controller_name">Отделка стен и потолка</div>
                            <div className="controller_pic" style={{backgroundImage: 'url(/assets/controllerPics/01.jpg)'}}></div>
                            <div className="controller_group">
                                <span className="controller_btn left"><i className="fa fa-chevron-left" /></span>
                                <span className="controller_input"><input className="sm" defaultValue="Канадский кедр" readOnly /></span>
                                <span className="controller_btn right"><i className="fa fa-chevron-right" /></span>
                            </div>
                        </div>
                        <div className="controller">
                            <div className="controller_name">Расположение полок</div>
                            <div className="controller_pic" style={{backgroundImage: 'url(/assets/controllerPics/02.jpg)'}}></div>
                            <div className="controller_group">
                                <span className="controller_btn left"><i className="fa fa-chevron-left" /></span>
                                <span className="controller_input"><input className="sm" defaultValue="Прямые" readOnly /></span>
                                <span className="controller_btn right"><i className="fa fa-chevron-right" /></span>
                            </div>
                        </div>
                        <div className="controller">
                            <div className="controller_name">Печь</div>
                            <div className="controller_pic" style={{backgroundImage: 'url(/assets/controllerPics/03.jpg)'}}></div>
                            <div className="controller_group">
                                <span className="controller_btn left"><i className="fa fa-chevron-left" /></span>
                                <span className="controller_input"><input className="sm" defaultValue="Дровяная" readOnly /></span>
                                <span className="controller_btn right"><i className="fa fa-chevron-right" /></span>
                            </div>
                        </div>
                        <div className="controller">
                            <div className="controller_name">Камни</div>
                            <div className="controller_pic" style={{backgroundImage: 'url(/assets/controllerPics/04.jpg)'}}></div>
                            <div className="controller_group">
                                <span className="controller_btn left"><i className="fa fa-chevron-left" /></span>
                                <span className="controller_input"><input className="sm" defaultValue="Подарок" readOnly /></span>
                                <span className="controller_btn right"><i className="fa fa-chevron-right" /></span>
                            </div>
                        </div>
                        <div className="controller">
                            <div className="controller_name">Освещение</div>
                            <div className="controller_pic" style={{backgroundImage: 'url(/assets/controllerPics/05.jpg)'}}></div>
                            <div className="controller_group">
                                <span className="controller_btn left"><i className="fa fa-chevron-left" /></span>
                                <span className="controller_input"><input className="sm" defaultValue="Светильник" readOnly /></span>
                                <span className="controller_btn right"><i className="fa fa-chevron-right" /></span>
                            </div>
                        </div>
                        <div className="controller">
                            <div className="controller_name">Отделка за печью</div>
                            <div className="controller_pic" style={{backgroundImage: 'url(/assets/controllerPics/06.jpg)'}}></div>
                            <div className="controller_group">
                                <span className="controller_btn left"><i className="fa fa-chevron-left" /></span>
                                <span className="controller_input"><input className="sm" defaultValue="Талькомагнезит" readOnly /></span>
                                <span className="controller_btn right"><i className="fa fa-chevron-right" /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container center">
                    <h3>Итого: 237 000 руб.</h3>
                </div>

            </div>          
        )
    }
}

export default ScreenCalculator;