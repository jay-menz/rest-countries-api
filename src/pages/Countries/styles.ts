import styles from "styled-components";
import { Countries } from "./Countries";

export const CountriesArea = styles.main<{theme: string}>`
     min-height: calc(100vh - 0);
     background-color: ${props => props.theme === 'light' ? '' : 'rgb(32, 45, 54)'};
     transition: all ease 0.2s;
     .countries {
        display: grid;
        width: 1150px;
        margin: auto;
        grid-template-columns: repeat(4, 1fr);  
        grid-gap: 30px;   
     }
`