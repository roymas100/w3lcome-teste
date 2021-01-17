import React, { useCallback } from 'react';

import { useAuth } from '../../hooks';

import { Container } from './styles';

import Button from '../../components/Button';

const Home: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleLogOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <h1>{user}</h1>
      <Button onClick={handleLogOut}>Sair da conta</Button>
    </Container>
  );
};

export default Home;
