const initState: loadingStateType  = {
    isLoading: false
}

export type loadingStateType = {
    isLoading: boolean
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: ReturnType<typeof loadingAC>): loadingStateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
