import React from 'react';
import { Box } from '@chakra-ui/react';
import styles from './styles/loader.module.css';
const Loader = () => {
  return (
    <Box h="10" display="flex" alignItems="center" justifyContent="center">
      {[1, 2, 3]?.map(el => (
        <Box key={el} className={styles.animation} />
      ))}
    </Box>
  );
};

export default Loader;
