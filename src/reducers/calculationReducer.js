export default function reducer(state={
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