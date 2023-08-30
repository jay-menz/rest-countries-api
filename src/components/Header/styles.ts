import styles, { DefaultTheme } from "styled-components";

export const Header = styles.header<{theme: DefaultTheme}>`
    height: 70px;
    background-color: ${props => props.theme.includes('light') ? '#FFF' : 'rgb(43, 55, 67)'};
    color: ${props =>props.theme.includes('light') ? '' : '#FFF'};
    transition: all ease 0.1s;
    box-shadow: 0px 9px 19px 0px #0000000E;
    // transition: all ease 0.2s;
    
    .container {
        display: flex;
        width: 1250px;
        margin: auto;
        justify-content: space-between;
        align-items: center;

        a {
            text-decoration: none;
            color: ${props =>props.theme.includes('light') ? '#000' : '#FFF'};
        }

        h1 {
            font-style: normal;
            font-weight: 1000;
            font-size: 24px;
            line-height: 33px;
        }

        p {
            cursor: pointer;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 25px;

            i {
                padding-right: 10px;
                font-size: 15px;
            }
        }
    }

    @media(max-width: 1024px) {
        &{
            padding: 0px 20px;

            .container {
                width: auto
            }
        }
    }

    @media(max-width: 767px) {
        
        .container {
            height: 100%;
            h1 {
                font-size: 17px;
            }
            p {
                font-size: 14px
            }
        }
    }
`