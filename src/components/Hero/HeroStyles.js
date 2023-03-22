import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const DownloadBtn = styled.a`
  text-decoration: none;
  font-size: 24px;
  padding: 10px 20px;
  background: linear-gradient(270deg, #ff622e 0%, #b133ff 100%);
  border-radius: 24px;
  color: white;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 62%;
    display: flex;
    font-size: 20px;
  }
`;
