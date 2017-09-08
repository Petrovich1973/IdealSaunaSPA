import React from 'react';

import './Footer.less';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            attribute: null
        };
    }

    render() {
        return (
            <div className="screen" id="Footer">

                <div className="container">
                    <div className="box-info">
                        <div className="logo">
                            <img src="/libs/img/logo-footer.png" />
                        </div>
                        <div className="info">
                            <div className="line">
                                <p>© 2017 idealsauna.ru — Строительство и отделка саун и бань, интернет-магазин по продажи оборудования и товаров для саун и бань.</p>
                            </div>
                            <div className="line column sm">
                                <p>Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации.</p>
                                <p>Для получения подробной информации о наличии и стоимости указанных товаров и (или) услуг, пожалуйста, обращайтесь к менеджерам с помощью специальной формы связи или по телефону.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

Footer.displayName = 'Footer';

export default Footer;