import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: 
    "header" 
    "content"
    "footer";
`;

export const Content = styled.div`
    grid-area: content;
    padding: 164px 124px 100px 124px;

    > div {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 18px;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border-radius: 8px;
        height: 260px;
        position: relative;

        div {
            margin-right: 47px;
        }

        img {
            position: absolute;
            bottom: 0;
            left: -53px;
            display: inline-block;
        }

    }z

    @media (max-width: 1100px) {
        width: 100%;
        padding: 64px;
        margin: auto;

        > div {

            width: 800px;
            justify-content: center;
            text-align: center;

            img {
                display: none;
            }
        }
    }

    @media (max-width: 900px) {
        max-width: 400px;
        padding-top: 64px;
        margin: auto;

        > div {

            width: 400px;
            justify-content: center;
            text-align: center;

            img {
                display: none;
            }
        }
    }
`;