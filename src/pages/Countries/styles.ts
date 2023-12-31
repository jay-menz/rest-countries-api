import styles, { DefaultTheme } from "styled-components";

export const CountriesArea = styles.main<{theme: DefaultTheme}>`
    min-height: calc(100vh - 0px);
    background-color: ${props =>props.theme.includes('light') ? '' : 'rgb(32, 45, 54)'};
    transition: all ease 0.2s;
    .countries {
        display: grid;
        width: 1250px;
        margin: auto;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 43px;
        margin-top: 5px;
        // border: 2px solid #333;
        

        .loading, .no-country-message {
            color: ${props =>props.theme.includes('light') ? '#000' : '#FFF'};
        }
    }

    .numbered {
        display: flex;
        list-style: none;
        justify-content: center;
        margin: 0px;
        padding: 20px 0px;
        

        button {
            height: 40px;
            width: 40px;
            background-color: ${props =>props.theme.includes('light') ? '#FFF' : 'rgb(43, 55, 67)'};
            color: ${props =>props.theme.includes('light') ? '#000' : '#FFF'};
            border: none;
            box-shadow: 0px 2px 9px 0px #0000000E;
            margin: 0px 5px;
            cursor: pointer;
           
        }

        .active {
            font-weight: 900;
            
        }
    }

    @media(max-width: 1024px) {
        .countries {
            width: auto;
            padding: 0px 20px;
        }
    }

    @media(max-width: 768px) {
        .countries {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(max-width: 440px) {
        .countries {
            grid-template-columns: 1fr;
        }
    }
`