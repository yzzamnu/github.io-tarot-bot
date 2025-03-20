import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  width: 200px;
  height: 350px;
  perspective: 1000px;
  cursor: ${props => props.isLocked ? 'default' : 'pointer'};
  opacity: ${props => props.isLocked ? 0.6 : 1};
`;

const CardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;

const CardBack = styled(CardFace)`
  background: url(${process.env.PUBLIC_URL}/assets/card-back.jpg) center/cover;
`;

const CardFront = styled(CardFace)`
  background: url(${props => `${process.env.PUBLIC_URL}/assets/cards/${props.image}`}) center/cover;
  transform: rotateY(180deg);
`;

const Card = ({ index, image, isFlipped, isLocked, onClick }) => {
  return (
    <CardWrapper
      isLocked={isLocked}
      onClick={() => !isLocked && !isFlipped && onClick(index)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <CardInner isFlipped={isFlipped}>
        <CardBack />
        <CardFront image={image} />
      </CardInner>
    </CardWrapper>
  );
};

export default Card;