import React from 'react';

import './BeforeBuildSauna.less';

class BeforeBuildSauna extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState = {
            actionsList: [
                {id: 1, isActive: true, name: 'Смета', intro: null, detail: '<h4>1 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'},
                {id: 2, isActive: false, name: 'Замер', intro: '(выезд специалиста на объект,для создания проекта и уточнения сметы)', detail: '<img src="/assets/BeforeBuildSauna/photo.jpg" style="float: left; margin: 0px 15px 15px 0px;" /> <h4>Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'},
                {id: 3, isActive: false, name: 'Проект', intro: '(чертеж выполненный тушью)', detail: '<img src="/assets/BeforeBuildSauna/photo.jpg" style="float: left; margin: 0px 15px 15px 0px;" /> <h4>3 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'},
                {id: 4, isActive: false, name: 'Договор', intro: '(проверенный юристами и заверенный натариусом)', detail: '<h4>4 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'},
                {id: 5, isActive: false, name: 'Строительство', intro: '(вся спец техника и квалифицированные рабочие)', detail: '<img src="/assets/BeforeBuildSauna/photo.jpg" style="float: left; margin: 0px 15px 15px 0px;" /> <h4>5 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'}
            ]
        };
    }

    handleClickItem(item) {
        let list = this.state.actionsList.map(m => {
            if(m.id === item.id) {
                return {...m, isActive: true}
            } else {
                return {...m, isActive: false}
            }
        })
        document.querySelector('.build-sauna_detail-view').classList.add('transition');
        setTimeout( transition.bind(this), 300 )
        function transition() {
            this.setState({
                actionsList: list
            });
            document.querySelector('.build-sauna_detail-view').classList.remove('transition');
        }
    }

    render() {
        return (
            <div className="screen" id="BeforeBuildSauna">
                <div className="container">
                    <h2 className="title-screen">5 действий<br/>до строительства<br/>вашей сауны</h2>
                </div>
                <div className="container">
                    <div className="build-sauna">
                        <div className="build-sauna_list">
                            { this.state.actionsList.map((m, i) => {
                                return <div 
                                    key={i} 
                                    className={ m.isActive ? 'build-sauna_item active' : 'build-sauna_item' }
                                    onClick={ () => this.handleClickItem(m) }>
                                    <div className="build-sauna_item_bulit"><span>{ m.id }</span></div>
                                    <div className="build-sauna_item_name">
                                        <h3>{ m.name }</h3>
                                        <p>{ m.intro || null }</p>
                                    </div>
                                </div>
                            }) }
                        </div>
                        <div className="build-sauna_detail-view">
                            <div dangerouslySetInnerHTML={ {__html: this.state.actionsList.filter(f => f.isActive)[0].detail} } />
                        </div>
                    </div>
                </div>
                <div className="container"><img src="/libs/img/icon-mouse.png" className="mouse" /></div>
            </div>          
        )
    }
}

export default BeforeBuildSauna;