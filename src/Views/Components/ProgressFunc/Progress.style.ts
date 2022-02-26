import styled from 'styled-components';

interface lProgress {
  completed: number;
  bgColor: string;
}

export const ProgressContainer = styled.div`
  width: 20px;
  height: 100%;
  background-color: #e0e0de;
  border-radius: 50;
  margin: 50px;
`;

export const StatusBar = styled.div`
  width: ${({ completed }: lProgress) => completed}%;
  height: 100%;
  background-color: ${({ bgColor }: lProgress) => bgColor};
  border-radius: inherit;
  text-align: right;
`;

export const LabelStyle = styled.span`
  display: block;
  padding: 5px;
  font-weight: bold;
`;
