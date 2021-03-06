export default function reducer(state = {
    articles: [/*{
        id: 1, 
        isActive: true, 
        name: 'Смета', 
        intro: null, 
        detail: '<h4>1 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'
    },{
        id: 2, 
        isActive: false, 
        name: 'Замер', 
        intro: '(выезд специалиста на объект,для создания проекта и уточнения сметы)', 
        detail: '<img src="/assets/images/BeforeBuildSauna/photo.jpg" style="float: left; margin: 0px 15px 15px 0px;" /> <h4>Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'
    },{
        id: 3, 
        isActive: false, 
        name: 'Проект', 
        intro: '(чертеж выполненный тушью)', 
        detail: '<img src="/assets/images/BeforeBuildSauna/photo.jpg" style="float: left; margin: 0px 15px 15px 0px;" /> <h4>3 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'
    },{
        id: 4, 
        isActive: false, 
        name: 'Договор', 
        intro: '(проверенный юристами и заверенный натариусом)', 
        detail: '<h4>4 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'
    },{
        id: 5, 
        isActive: false, 
        name: 'Строительство', 
        intro: '(вся спец техника и квалифицированные рабочие)', 
        detail: '<img src="/assets/images/BeforeBuildSauna/photo.jpg" style="float: left; margin: 0px 15px 15px 0px;" /> <h4>5 Руководитель компании IdealSauna Протасов Александр</h4><p>«Главный принцип работы нашей компании – построение доверительных отношений с клиентом.</p><p>Что мы для этого делаем? Конечно, даем гарантии.</p><p>Я лично предоставляю финансовое поручительство как физическое лицо. Такая ответственность владельца бизнеса гораздо серьезнее, чем формальная ответственность юридического лица. Кроме того, я лично контролирую все стадии каждого проекта.»</p>'
    }*/],
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
        case "FETCH_ARTICLES": {
            return { ...state, fetching: true };
        }
        case "FETCH_ARTICLES_REJECTED": {
            return { ...state, fetching: false, error: action.payload };
        }
        case "FETCH_ARTICLES_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                articles: action.payload
            };
        }
        case "SET_CURRENT_ARTICLES": {
            return {
                ...state,
                articles: action.payload
            };
        }
    }

    return state;
}