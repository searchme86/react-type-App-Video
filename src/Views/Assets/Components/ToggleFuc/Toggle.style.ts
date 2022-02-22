import styled from 'styled-components';

export const ToggleBox = styled.div``;

export const ToggleItem = styled.div`
  position: relative;
`;

export const ToggleTitle = styled.label`
  display: block;
  font-size: 20px;
`;

export const ToggleInput = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + label:before {
    background-color: #597ef7;
  }

  &:checked + label:after {
    content: ' ';
    width: 35px;
    height: 35px;
    left: 60px;
    background: #fff;
  }

  &:checked + label {
    span {
      margin-left: 0;
    }
  }
`;

export const ToggleLabel = styled.label`
  display: block;
  width: 100px;
  height: 40px;
  border-radius: 100px;
  background-color: #f5f5f5;
  overflow: hidden;
  transition: background-color 0.2s box-shadow 0.2s;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    width: 100px;
    height: 40px;
  }

  &:after {
    content: '';
    width: 35px;
    height: 35px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5.5px;
    border-radius: 45px;
    background: #fff;
    transition: 0.2s;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }
`;

export const ToggleStatus = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  position: relative;
  &:before {
    content: attr(data-yes);
    display: block;
    position: absolute;
    float: left;
    width: 100%;
    height: 20px;
    top: calc(100% - 27px);
    left: 11px;
    text-align: left;
  }
  &:after {
    content: attr(data-no);
    display: block;
    position: absolute;
    float: left;
    width: 100%;
    height: 20px;
    top: calc(100% - 27px);
    right: 11px;
    text-align: right;
  }
`;
