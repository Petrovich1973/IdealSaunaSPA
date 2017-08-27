export default function reducer(state={
    parameters: {
        long: 200,
        width: 200,
        height: 200,
    },
    materials: {
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
        ],
    },
    config: 3000,
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_CALCULATION": {
            return {...state, fetching: true}
        }
        case "FETCH_CALCULATION_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_CALCULATION_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                parameters: action.payload.parameters,
                materials: action.payload.materials,
                config: action.payload.config,
            }
        }
        case "SET_CHANGE_PARAMETER": {
            return {
                ...state,
                parameters: action.payload,
            }
        }
        case "SET_CHANGE_MATERIAL": {
            return {
                ...state,
                materials: action.payload,
            }
        }
    }

    return state
}