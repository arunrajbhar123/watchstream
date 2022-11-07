import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import styles from './styles/scrollhide.module.css';
import { useNavigate } from 'react-router-dom';
const SimilarContent = ({ similarContent }) => {
  const EXCTRA_IMG_LINK = 'https://image.tmdb.org/t/p/w500/';
  const navigate = useNavigate();
  return (
    <Box p="30px 0">
      <Flex gap={2} className={styles.hideScrollbasr}>
        {similarContent?.map((el, index) => (
          <Image
            w="180px"
            rounded={8}
            key={index}
            src={EXCTRA_IMG_LINK + el.poster_path}
            onClick={() => {
              navigate(`/au/${el.title}/${el?.id}`);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default SimilarContent;
