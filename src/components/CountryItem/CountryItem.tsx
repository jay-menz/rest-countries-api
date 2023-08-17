import * as S from './styles'
import { CountriesTypeScript } from '../../types/CountryItem'
import { Link } from 'react-router-dom'
import { useForm } from '../../context/ContextTheme'



export const CountryItem = ({name, population, region, capital, flags}:CountriesTypeScript ) => {
    const {state} = useForm()

    return (
        <S.CountryItem theme={state.theme}>
            <Link to={`/country/${name}`}>
                <div className='img--area'>
                    <img src={flag} alt={`Flag of: ${name}`} />
                </div>
                <div className='data--area'>
                    <p className='country--name'>{name}</p>
                    <p>Population: <span>{' '}{population.toLocaleString()}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>
            </Link>
        </S.CountryItem>
    )
}