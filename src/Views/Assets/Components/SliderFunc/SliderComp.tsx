import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Wrapper, RowWrapper, Row, Box } from './Slider.style';

// const myVariants = {
//   start: {
//     scale: 0,
//   },
//   en: {
//     scale: 1,
//     rotateZ: 360,
//     transition: { type: 'spring', delay: 0.5 },
//   },
// };

// const boxVariants = {
//   initial: {
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     rotateZ: 360,
//   },
//   leaving: {
//     opacity: 0,
//     scale: 0,
//     y: 20,
//   },
// };

// const box = {
//   entry: (back: boolean) => ({
//     x: back ? -500 : 500,
//     opacity: 0,
//     scale: 0,
//   }),
//   // invisible: {
//   //   x: 500,
//   //   opacity: 0,
//   //   scale: 0,
//   // },
//   visible: {
//     x: 0,
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 1,
//     },
//   },
//   exit: (back: boolean) => ({
//     x: back ? 500 : -500,
//     opacity: 0,
//     scale: 0,
//     transition: { duration: 1 },
//   }),

//   // exit: { x: -500, opacity: 0, scale: 0, transition: { duration: 1 } },
// };

const variants = {
  hidden: {
    x: 1000,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -1000,
  },
};

function Slider() {
  // const [visible, setVisible] = useState(1);
  // const [back, setBack] = useState(false);
  // const next = () => {
  //   setBack(false);
  //   setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  // };
  // const prev = () => {
  //   setBack(true);
  //   setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  // };

  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    setIndex((prev) => prev + 1);
  };
  return (
    <>
      <Wrapper>
        {/* <AnimatePresence custom={back}>
          <Box
            custom={back}
            key={visible}
            variants={box}
            initial="invisible"
            animate="visible"
            exit="exit"
          >
            {visible}
          </Box>
        </AnimatePresence>
        <button onClick={next}>next</button>
        <button onClick={prev}>prev</button> */}

        <AnimatePresence>
          <RowWrapper>
            <Row>
              <Box
                key={index}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween' }}
              />
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Box key={i}>{i}</Box>
              ))}
            </Row>
          </RowWrapper>
        </AnimatePresence>
        <button onClick={increaseIndex}>다음 인덱스로 이동을 호출버튼</button>
      </Wrapper>
    </>
  );
}

export default Slider;
