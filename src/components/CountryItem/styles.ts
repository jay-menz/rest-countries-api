import styles, { DefaultTheme } from "styled-components";

export const CountryItem = styles.div<{theme: DefaultTheme}>`
    transition: all ease 0.2s;
    border-radius: 4px;
    &:hover {
        transform: scale(105%);
    }
    a {
        text-decoration: none;
        color: #000;
    }
    .img--area {
        img {
            width: 100%;
            height: 150px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
    .data--area {
        background: ${props => props.theme.includes('light') ? '#FFF' : 'inherit'};
        color: ${props => props.theme.includes('light') ? '#000' : '#FFF'};
        padding: 10px 20px;
        p {
            font-size: 13px;
            font-weight: 500;
            margin: 10px 0px;
            span {
                font-weight: 300;
            }
        }
        .country--name {
            font-size: 17px;
            margin: 10px 0 20px 0;
            
        }
    }

    @media(max-width: 768px) {
        .img--area {
            img {
                height: 180px;
            }
        }
    }
`