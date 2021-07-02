import styled from "styled-components";

export const Container = styled.div`
    width: 65%;
    margin: 0 auto;

    >div{
        display: flex;
        flex-direction: row;

        .col{
            width: 100%;
            flex-direction: column;
        }

        @media(max-width: 767px){
            flex-direction: column;
        }
    }

    @media(max-width: 1440px){
        width: 100%;
        padding: 0 20px;
    }
`;

export const Menu = styled.div`
    background-color: #E2DEDB;
    margin: 20px 20px 20px 0;
    width: 310px;
    padding: 25px 20px;
    height: 52vh;
    a{
        color: black;
        font-size: 1.1rem;
        
        :hover{
            color: var(--red);
        }
        transition: .5s;
    }
    li{
        margin-bottom: 12px;
    }

    @media(max-width: 767px){
        display: none;
    }
`;

export const Carousel = styled.div`
    width: 100%;
    height: 30vh;
    margin: 20px 0;
    background-color: #ACACAC;

    @media(max-width: 767px){
        height: 15vh;
    }

`;

export const Welcome = styled.div`
    margin-bottom: 20px;
    h1{
        font-size: 1.5rem;
    }
    p{
        margin-top: 5px;
        font-size: .95rem;
        line-height: 17px;
    }
`;
