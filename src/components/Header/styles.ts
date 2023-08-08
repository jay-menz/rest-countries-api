import styles from "styled-components";

export const Header = styles.header<{theme: string}>`
height: 80px;
background-color: ${props => props.theme === 'light' ? '#fff' : 'rgb(43, 55, 67)'};
color: ${props => props.theme === 'light' ? '' : '#fff'};
transition: all ease 0.2s;
box-shadow: box-shadow: 0px 2px 9px 0px #0000000E;


.container {
    display: flex;
    width: 1150px;
    margin: auto;
    justify-content: space-around;
    aligh-items: center;
}

a {
    text-decoration: none;
    color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
}

h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
}
`