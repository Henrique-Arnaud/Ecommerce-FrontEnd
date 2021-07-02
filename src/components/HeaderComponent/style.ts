import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    color: white;
`;
export const TopBar = styled.div`
    width: 100%;
    height: 30px;
    background-color: var(--darkGrey);
    >div{
        width: 65%;
        margin: 0 auto;
        text-align: end;
        >p{
            padding: .5vh 0;
            font-size: .95rem;

            >a{
                font-weight: bold;
                text-decoration: underline;
            }
        }
    }

    @media(max-width: 1023px){
        >div{
            width: 100%;
            >p{
                margin: 0 2vw;
            }
        }
    }
    @media(max-width: 767px){
        >div{
            >p{
                text-align: center;
            }
        }
    }
`;

export const Header = styled.div`
    width: 65%;
    height: 110px;
    margin: 1vh auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    svg{
        font-size: 1.8rem;
        margin-right: 3vw;
        color: black;
    }
    img{
        width: 200px;
        height: 70px;
        cursor: pointer;
    }
    .menu{
        display: none;
    }
    .searchIcon{
        display: none;
    }
    .searchArea{
        >input{
            height: 42px;
            width: 420px;
            border: black 1px solid;
            color: black;
            padding: 5px;
        }
        >button{
            background-color: var(--red);
            width: 100px;
            height: 42px;
            font-weight: bolder;
            font-size: 1.05rem;
        }
    }
    @media(max-width: 1440px){
        width: 95%;
    }
    @media(max-width: 767px){
        .menu{
            display: block;
        }
        .searchIcon{
            display: flex;
            color: var(--red);
        }
        .searchArea{
            display: none;
        }
    }

`;

export const Menu = styled.div`
    width: 100%;
    height: 55px;
    background-color: var(--red);
    display: flex;
    flex-direction: row;
    align-items: center;
    >div{
        width: 65%;
        margin: 0 auto;
        >a{
            margin-right: 5.5vw;
            font-weight: bold;
            font-size: 1.05rem;
            :hover{
                color: black;
            }
            transition: .5s;
        }
    }
    @media(max-width: 1440px){
        >div{
            width: 100%;
            margin: 0 3vw;
        }
    }
    @media(max-width: 767px){
        
        display: none;
        
    }
`;
