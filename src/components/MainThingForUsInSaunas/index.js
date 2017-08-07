import React from 'react';

import './MainThingForUsInSaunas.less';

class MainThingForUsInSaunas extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            galleryView: 1
        };
    }

    render() {
        return (
            <div className="screen" id="MainThingForUsInSaunas">
                <div className="container">
                    <h2 className="title-screen">главное<br/>для нас в саунах</h2>
                </div>
                <div className="container">
                    <div className="us-in-saunas">
                        <div className="us-in-saunas_item">
                            <div className="us-in-saunas_item_decor">1</div>
                            <div className="us-in-saunas_item_icon">
                                <img src="/assets/us-in-saunas_item_icons/01.png" />
                            </div>
                            <div>
                                <div className="us-in-saunas_item_name">Безопасность</div>
                                <div className="us-in-saunas_item_description">Монтируем только проверенное оборудование известных производителей</div>
                            </div>
                        </div>
                        <div className="us-in-saunas_item">
                            <div className="us-in-saunas_item_decor">2</div>
                            <div className="us-in-saunas_item_icon">
                                <img src="/assets/us-in-saunas_item_icons/02.png" />
                            </div>
                            <div>
                                <div className="us-in-saunas_item_name">Надежность</div>
                                <div className="us-in-saunas_item_description">Соблюдаем все нормы и правила при строительстве</div>
                            </div>
                        </div>
                        <div className="us-in-saunas_item">
                            <div className="us-in-saunas_item_decor">3</div>
                            <div className="us-in-saunas_item_icon">
                                <img src="/assets/us-in-saunas_item_icons/03.png" />
                            </div>
                            <div>
                                <div className="us-in-saunas_item_name">Качество</div>
                                <div className="us-in-saunas_item_description">У нас работают только профессиональные строители</div>
                            </div>
                        </div>
                        <div className="us-in-saunas_item">
                            <div className="us-in-saunas_item_decor">4</div>
                            <div className="us-in-saunas_item_icon">
                                <img src="/assets/us-in-saunas_item_icons/04.png" />
                            </div>
                            <div>
                                <div className="us-in-saunas_item_name">Комфорт</div>
                                <div className="us-in-saunas_item_description">Продумываем все мелочи на этапе проектирования сауны</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container"><img src="/libs/img/icon-mouse.png" className="mouse" /></div>
            </div>          
        )
    }
}

export default MainThingForUsInSaunas;