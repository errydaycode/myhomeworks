const initState = {
    themeId: 1,
}

type initStateType = {
    themeId: number
}

export const themeReducer = (state: initStateType = initState, action: changeThemeIdACType): initStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdACType => ({ type: 'SET_THEME_ID', id }) // fix any


type changeThemeIdACType = {
    type: 'SET_THEME_ID',
    id: number
}