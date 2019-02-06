import React from 'react';
import Button from '@material-ui/core/Button';
import { Star } from './ButtonUIStyle';

export const ButtonItem = ({ data, error, mutateStar, starred, text, id }) => {
  const starColor = starred ? { color: 'gold' } : { color: 'white' };
  return (
    <>
      {error && <div style={{ fontSize: 8 }}>ORG LIMITS ACCESS</div>}
      <Button
        data-testid={'mutate'}
        onClick={e => {
          e.preventDefault();
          mutateStar({
            variables: { input: { starrableId: id } },
          });
        }}
        variant="contained"
        color="primary"
        style={{ width: 120 }}
      >
        <Star style={starColor} />
        {text}
      </Button>
    </>
  );
};
