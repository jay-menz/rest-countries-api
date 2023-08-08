import * as S from './styles';
import { SingleCountryTypeScript } from '../../types/SingleCountry';
import {Link} from 'react-router-dom';
import {useForm} from '../../context/ContextTheme';
import {useApi} from '../../context/ContextApi';
import {useEffect, useState} from 'react';


export const SingleCountry = ({
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
        flags
}: SingleCountryTypeScript) => {
    const {state} = useForm();
    const countries = useApi();
    const [borderFullNames, setBorderFullNames] = useState<string[]>([]);
}