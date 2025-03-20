import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';
import api from '../utils/api';

const SpreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #1a1a1a;
  min-height: 100vh;
  color: white;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: gold;
  text-align: center;
  margin: 20px 0;
  font-size: 2.5rem;
`;

const LoadingText = styled.div`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 50px;
`;

const ErrorText = styled.div`
  color: #ff6b6b;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 50px;
`;

function SpreadView() {
  const { spreadId } = useParams();
  const [spread, setSpread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpread = async () => {
      try {
        const spreadData = await api.getSpread(spreadId);
        setSpread(spreadData);
        setLoading(false);
      } catch (err) {
        setError('Не удалось загрузить расклад');
        setLoading(false);
      }
    };

    fetchSpread();
  }, [spreadId]);

  if (loading) {
    return (
      <SpreadContainer>
        <LoadingText>Загрузка расклада...</LoadingText>
      </SpreadContainer>
    );
  }

  if (error) {
    return (
      <SpreadContainer>
        <ErrorText>{error}</ErrorText>
      </SpreadContainer>
    );
  }

  return (
    <SpreadContainer>
      <Title>Расклад Таро</Title>
      <CardsContainer>
        {spread?.cards.map((card, index) => (
          <Card
            key={index}
            name={card}
            description={spread.descriptions[index]}
          />
        ))}
      </CardsContainer>
    </SpreadContainer>
  );
}

export default SpreadView;