import styled from 'styled-components';

export const ClipboardWrapper = styled.div`
  position: relative;
  padding: 10px;
  box-sizing: border-box;
`;

export const CopiedText = styled.p`
  display: block;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0 10px 0;
`;

export const ClipboardBtn = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 2px;
  opacity: 1;
  transition: opacity 0.5s ease-out;
  -moz-transition: opacity 0.5s ease-out;
  -webkit-transition: opacity 0.5s ease-out;
  -o-transition: opacity 0.5s ease-out;
`;
