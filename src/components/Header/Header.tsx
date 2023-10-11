import * as S from './styles'
import { useForm } from '../../context/ContextTheme'
import { themeActions } from '../../context/ContextTheme'
import { Link, useNavigate, useLocation } from 'react-router-dom'



export const Header = () => {
    const { state, dispatch } = useForm()
    let navigate = useNavigate();
    let location = useLocation();

    const handleChangeTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme.includes('light') ? 'dark' : 'light'
        })
    }
    const handleClick = () => { 
        if(location.pathname === '/'){
            window.location.reload()
            return 
        }
        navigate("/")
    }


    
    return (
        <S.Header theme={state.theme}>
            <div className='container'>
            <Link onClick={handleClick}  to="/" ><h1>Where in the world?</h1></Link>
                <p onClick={handleChangeTheme}>
                    <i className={state.theme.includes('light') ? 'far fa-moon' : 'fa fa-moon'}></i>
                    {state.theme.includes('light') ? 'Dark Mode' : 'Light Mode' } {/* Conditionally render the text */}
                </p>
            </div>
        </S.Header>
    )
}
