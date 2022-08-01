import { styled } from '@storybook/theming';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(30,167,253, 0.9);
  padding: 20px 5px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

export const SubTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;


export const ButtonsEditor = styled.div`
  display: flex;
  button {
    position: relative;
    background-color: ${({ isDark }) => (isDark ? '#525252' : '#cbcbcb')};
    border: none;
    border-radius: 2px;
    font-size: 11px;
    font-weight: 800;
    padding: 1px 8px;
    margin: 0 0 0 10px;
    color: ${({ isDark }) => (isDark ? '#bcbaba' : '#565454')};
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }
  button.active {
    :hover {
      opacity: 1;
    }
  }
`;