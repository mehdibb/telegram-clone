import styled from '@emotion/styled';


export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--grey);
  }
`;

export const Title = styled.span`
  color: var(--grey);
  font-size: 10px;
`;

export const Text = styled.span`
  margin-bottom: 8px;
`;

export const TitleAndTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 12px;
`;

export const StyledInfoItem = styled.div`
  display: flex;
  padding: 8px 16px;
`;