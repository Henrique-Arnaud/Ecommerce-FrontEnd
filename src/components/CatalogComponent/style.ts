import styled from "styled-components";

export const Container = styled.div`
    width: 65%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    margin-top: 5vh;
    margin-bottom: 20px;

    @media(max-width: 1440px){
        width: 100%;
        padding: 0 20px;
    }
    @media(max-width: 767px){
        flex-direction: column;
    }
`;

export const SideMenu = styled.div`
    padding: 15px;
    border-width: thin;
    width: 270px;
    min-height: 52vh;
    margin-right: 20px;
    
    @media(max-width: 767px){
        margin: 20px auto;
    }
    @media(max-width: 440px){
        width: 100%;
    }

    h1{
        color: var(--red);
        font-size: 1.6rem;
        font-weight: bold;
    }
    h2{
        font-size: 1.2rem;
        color: var(--darkAqua);
        font-weight: bold;
        margin: 3px 0;
    }
    menu{
        margin: 7px 0 30px 0;
        a{
            color: black;
            margin: 10px 0;
        }
    }
    >div{
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
        .red{
            background-color: var(--red);
        }
        .orange{
            background-color: var(--orange);
        }
        .blue{
            background-color: var(--blue);
        }

        div{
            width: 50px;
            height: 30px;
            margin-right: 3px;
        }
    }
`;

export const CatalogSection = styled.div`
    width: 100%;

    >h1{
        font-size: 1.7rem;
        color: var(--red);
    }

`;

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 10%;
    margin-top: 5vh;
`;

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    text-align: center;
    >img{
        border-width: thin;
        width: 200px;
        height: 230px;
    }
    >p{
        font-size: 1.1rem;
    }
    >b{
        margin: 5px 0;
        color: var(--red);
        font-size: 1.3rem;
    }
    >button{
        border: none;
        background-color: var(--aqua);
        border-radius: 5px;
        height: 40px;
        font-weight: bold;
        color: white;
    }

`;