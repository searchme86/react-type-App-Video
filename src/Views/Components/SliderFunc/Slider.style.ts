import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: orange;
  flex-direction: column;
`;

export const Box = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const RowWrapper = styled(motion.div)``;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat * 6, 1fr;
`;
