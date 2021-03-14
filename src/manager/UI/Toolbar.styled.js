import { styled } from '@storybook/theming';

export const Container = styled.div`
  background-color: ${({ theme, footer }) =>
    footer ? theme.background.hoverable : theme.background.hoverable};

  padding: ${({ footer }) => (footer ? '6px 8px' : '4px 8px')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
