import styles from "styled-components";

export const InputArea = styles.section<{theme: string}>`
        display: flex;
        width: 1150px;
        margin: auto;
        justify-content: space-between;
        padding: 40px 0px;
        transition: all ease 0.2s;

        .textAreaDiv {
            background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
            box-shadow: 0px 2px 9px 0px #0000000E;
            border-radius: 5px;
            padding: 0 0 0 10px;
            color: ${props => props.theme === 'light' ? '' : '#FFF'};
        }

        input {
            background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
            color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
            border-radius: 5px;
            width: 480px;
            padding: 0px 10px;
            border: none;
            outline: 0;
            font-size: 14px

            ::placeholder {
                font-weight: 400;
            }
        }
        i {
            margin: 0 20px 0 20px;
            color: #848484;
        }
        .dropdown {
            position: relative;
            display: inline-block;

            .dropdown-toggle {
                
            }
        }
`