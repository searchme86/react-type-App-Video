import styled from 'styled-components';

export const ToggleBox = styled.div`
  position: relative;
  height: 200px;
  border: 1px solid red;
`;

export const ToggleTitle = styled.span`
  position: absolute;
  display: block;
  top: -26px;
  background: yellow;
  font-size: 20px;
`;

export const ToggleInput = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + label:before {
    background-color: #1890ff;
  }

  &:checked + label:after {
    content: ' ';
    width: 21px;
    height: 21px;
    background: #fff;
    // left: calc(100% - 2px);
    left: 46px;
    // transform: translateX(-100%);
  }

  // &:focus + label {
  //   box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  // }

  // &:focus:checked + label {
  //   box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  // }
`;

export const ToggleLabel = styled.label`
  display: block;
  position: relative;
  top: 30px;
  width: 70px;
  height: 25px;
  border-radius: 100px;
  background-color: red;

  transition: background-color 0.2s box-shadow 0.2s;

  &:before {
    content: '';
    display: block;
    background: yellow;
    cursor: pointer;
    width: 70px;
    height: 25px;
    border-radius: 100px;
    border: 2px solid red;
    background-color: red;
  }

  &:after {
    content: ' ';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }

  &:active:before {
    width: 28px;
  }
`;
