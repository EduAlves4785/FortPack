import styled from "styled-components";

export const Nav=styled.nav`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-logo{
        padding-left: 5rem;
        width: 13rem;
        display: flex;
        align-items:start;
        justify-content: center;
        color: #E36414;
        font-size: 20px;

        a{
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
            width: 15rem;
        }

        h1{ 
            color: #001F57;
        }
    }

    .itens-nav{
        width: 30rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-around;

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 6rem;
            text-decoration: none;
            font-size: 18px;
            color: #001F57;
            transition: .3s;

            &:hover{
                color: #E36414;
            }
        }

    }

    @media screen and (max-width: 780px){
        .nav-logo{
            padding-left: 1rem;
        }

        .itens-nav{
            display: none;
        }
    }

`