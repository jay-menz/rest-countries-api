import { createContext, useContext, useReducer } from "react";
import { DefaultTheme } from "styled-components";

interface State {
    theme: DefaultTheme
}

interface Actions {
    type: themeActions,
    payload: any
}

interface Provider {
    children: React.ReactNode
}

interface ContextType {
    state: State,
    dispatch: (action: Actions) => void
}


const initialData: State = {
    theme: ['light']
} //this initially switch theme to light mode

const ThemeContext = createContext<ContextType | undefined>(undefined)

export enum themeActions {
    setTheme,
}

const reducer = (state: State, action: Actions) => {
    return {...state, theme:action.payload}
}

export const ThemeProvider = ({children}: Provider) => {
    const [state, dispatch] = useReducer(reducer, initialData);
    const value = {state, dispatch}

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(ThemeContext)
    if(context === undefined) {
        throw new Error('useForm needs to be used inside the ThemeProvider')
    }
    return context
}