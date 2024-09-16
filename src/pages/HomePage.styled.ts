import styled from 'styled-components';

export const HomePageContainer = styled.main`
    height: 100vh;
    width: 100vw;
    background: rgb(24,25,26);
    background: linear-gradient(130deg, rgba(24,25,26,1) 0%, rgba(39,39,40,1) 100%);
    display: flex;
    flex-direction: column;
`;

export const MainSection = styled.article`
    padding: 20px 60px;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
