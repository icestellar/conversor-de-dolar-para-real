import styled from "styled-components";
const Img = styled.img`
    width: 168px;
    height: auto;
`;

const ContainerDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 3% 3%;
    flex-direction: row;
`;

const ContainerText = styled.div`
    flex-direction: column;
    padding: 0% 3%;
    .main-text{
        font-weight: 500;
        font-size: 18px; 
    }
    .info-text{
        color:#8C9CAD; 
        font-weight: 400;
        font-size: 14px
    }
`;
export {Img, ContainerDiv,ContainerText}
  