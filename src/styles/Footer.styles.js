import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: rgba(0, 128, 55);
    width: 100%;
    height: 100px;

    @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    }
`;

export const FooterUL = styled.ul`
    //margin: 30px;
    color: #ff914d;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    font-weight: 400;
    list-style-type: none;
`;

export const FooterImg = styled.img`
    width: 50px;
    height: 50;
`;