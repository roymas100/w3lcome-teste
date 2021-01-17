import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

interface ContainerProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  background: #adbdff;
  border-radius: 10px;
  border: 3px solid #adbdff;
  width: 100%;
  transition: color 0.2s;
  transition: border 0.2s;

  display: flex;
  align-items: center;

  color: ${transparentize(0.5, '#4b3063')};

  & + div {
    margin-top: 16px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #fec601;
      border: 3px solid #fec601;
    `};

  ${props =>
    props.isFilled &&
    css`
      color: #fec601;
    `};

  ${props =>
    props.hasError &&
    css`
      color: #e4572e;
      border: 3px solid #e4572e;
    `};

  input {
    flex: 1;
    background: transparent;
    border: 0;
    background: #adbdff;
    color: #311738;
    font-weight: 500;
    font-size: 16px;

    &::placeholder {
      font-size: 14px;
      color: ${transparentize(0.5, '#4b3063')};
    }
  }

  > svg {
    margin-right: 16px;
  }
`;
