import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  > * {
    margin: 0 16px;
  }

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 60px;
    background: rgba(94, 223, 223, 0.1);
  }
`;

export const Title = styled.h1`
  font-size: 1.3rem;
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const UserPresence = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  line-height: 1.6;
  text-align: right;

  button {
    margin-left: 16px;
  }
`;
