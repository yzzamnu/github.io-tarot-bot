import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import Loading from './Loading';
import { getSpread } from '../utils/api';

const SpreadContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 2rem auto;
`;

const Description = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  margin-top: 2rem;
  max-width: 600px;
  width: 90%;
  backdrop-filter: blur(5px);
`;

const Spread = () => {
  const { id } = useParams();
  const [spread, setSpread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [flippedCards, setFlippedCards] = useState(new Set());

  useEffect(() => {
    const fetchSpread = async () => {
      try {
        const data = await getSpread(id);
        setSpread(data);
      } catch (error) {
        console.error('Error fetching spread:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpread();
  }, [id]);

  const handleCardClick = (index) => {
    if (!flippedCards.has(index)) {
      setFlippedCards(new Set([...flippedCards, index]));
      setActiveCard(index);
    }
  };

  if (loading) return <Loading />;
  if (!spread) return <div>Расклад не найден</div>;

  return (
    <SpreadContainer>
      <CardsGrid>
        {spread.cards.map((card, index) => (
          <Card
            key={index}
            index={index}
            image={card.image}
            isFlipped={flippedCards.has(index)}
            isLocked={flippedCards.size > 0 && !flippedCards.has(index)}
            onClick={handleCardClick}
          />
        ))}
      </CardsGrid>
      <AnimatePresence>
        {activeCard !== null && (
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h2>{spread.cards[activeCard].name}</h2>
            <p>{spread.descriptions[activeCard]}</p>
          </Description>
        )}
      </AnimatePresence>
    </SpreadContainer>
  );
};

export default Spread;