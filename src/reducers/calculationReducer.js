export default function reducer(state = {
/*    parameters: {
        long: 200,
        width: 200,
        height: 200,
    },
    materials: {
        walls: [
            {id: 1, selected: true, name: 'Канадский кедр', image: '/assets/images/controllerPics/01.jpg', price: 2300},
            {id: 2, selected: false, name: 'Сибирский дуб', image: '/assets/images/controllerPics/02.jpg', price: 700},
            {id: 3, selected: false, name: 'Сосна', image: '/assets/images/controllerPics/03.jpg', price: 900}
        ],
        rack: [
            {id: 1, selected: true, name: 'Прямые', image: '/assets/images/controllerPics/02.jpg', price: 300},
            {id: 2, selected: false, name: 'Каскадные', image: '/assets/images/controllerPics/03.jpg', price: 500},
            {id: 3, selected: false, name: 'Вертикальные', image: '/assets/images/controllerPics/04.jpg', price: 800}
        ],
        furnace: [
            {id: 1, selected: true, name: 'Деревяные', image: '/assets/images/controllerPics/03.jpg', price: 30000},
            {id: 2, selected: false, name: 'Электрические', image: '/assets/images/controllerPics/04.jpg', price: 50000}
        ],
        stones: [
            {id: 1, selected: true, name: 'Подарок', image: '/assets/images/controllerPics/04.jpg', price: 0},
            {id: 2, selected: false, name: 'Эльфийские', image: '/assets/images/controllerPics/05.jpg', price: 5000},
            {id: 3, selected: false, name: 'Астеройдные', image: '/assets/images/controllerPics/06.jpg', price: 10000}
        ],
        lighting: [
            {id: 1, selected: true, name: 'Светильник', image: '/assets/images/controllerPics/05.jpg', price: 4000},
            {id: 2, selected: false, name: 'Бра', image: '/assets/images/controllerPics/03.jpg', price: 5000},
            {id: 3, selected: false, name: 'Торшер', image: '/assets/images/controllerPics/06.jpg', price: 6000}
        ],
        furnishBehind: [
            {id: 1, selected: true, name: 'Талькомагнезит', image: '/assets/images/controllerPics/06.jpg', price: 4000},
            {id: 2, selected: false, name: 'Талькохлорит', image: '/assets/images/controllerPics/02.jpg', price: 5000}
        ],
    },
    config: 3000,*/
    calculation: {
        "sizing": {
            "long": 200,
            "width": 200,
            "height": 200
        },
        "decoration": [{
            "id": 0,
            "selected": true,
            "name": "Канадский кедр",
            "image": "/assets/images/controllerPics/01.jpg",
            "price": 6300
        },{
            "id": 1,
            "selected": false,
            "name": "Сибирский кедр",
            "image": "/assets/images/controllerPics/02.jpg",
            "price": 3900
        },{
            "id": 2,
            "selected": false,
            "name": "Ольха",
            "image": "/assets/images/controllerPics/03.jpg",
            "price": 3750
        }],
        "rack": [{
            "id": 0,
            "selected": true,
            "name": "Прямые",
            "image": "/assets/images/controllerPics/01.jpg",
            "price": 39000
        },{
            "id": 1,
            "selected": false,
            "name": "Г-образные",
            "image": "/assets/images/controllerPics/02.jpg",
            "price": 53000
        }],
        "oven": [{
            "id": 0,
            "selected": true,
            "name": "Электрическая",
            "image": "/assets/images/controllerPics/01.jpg",
            "price": 40500
        },{
            "id": 1,
            "selected": false,
            "name": "Дровяная",
            "image": "/assets/images/controllerPics/02.jpg",
            "price": 98000
        }],
        "stones": [{
            "id": 0,
            "selected": true,
            "name": "Подарок",
            "image": "/assets/images/controllerPics/01.jpg",
            "price": 0
        }],
        "lighting": [{
            "id": 0,
            "selected": true,
            "name": "2 Светильника",
            "image": "/assets/images/controllerPics/01.jpg",
            "price": 5100
        }],
        "refractory": [{
            "id": 0,
            "selected": true,
            "name": "Талькохлорит",
            "image": "/assets/images/controllerPics/01.jpg",
            "price": 30220
        },{
            "id": 1,
            "selected": false,
            "name": "Змеевик",
            "image": "/assets/images/controllerPics/02.jpg",
            "price": 26750
        },{
            "id": 2,
            "selected": false,
            "name": "Жадеит",
            "image": "/assets/images/controllerPics/03.jpg",
            "price": 96530
        }]
    },
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
        case "FETCH_CALCULATION": {
            return { ...state, fetching: true };
        }
        case "FETCH_CALCULATION_REJECTED": {
            return { ...state, fetching: false, error: action.payload };
        }
        case "FETCH_CALCULATION_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                calculation: action.payload
            };
        }
        case "SET_CHANGE_PARAMETER": {
            return {
                ...state,
                calculation: {
                    ...state.calculation,
                    sizing: action.payload
                }
            };
        }
        case "SET_CHANGE_MATERIAL": {
            return {
                ...state,
                calculation: action.payload
            };
        }
    }

    return state;
}