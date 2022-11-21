import React, { useContext } from 'react';
import { Box, Image, Text, Badge, Flex } from '@chakra-ui/react';
import { MovieContext } from './../context api/ContextProvider';
import styles from './styles/scrollhide.module.css';
const Filtericons = ({ data }) => {
  const { EXCTRA_IMG_LINK } = useContext(MovieContext);

  return (
    <Box>
      <Flex className={styles.hideScrollbasr} w="100%" gap="2">
        {data?.map((el, index) => (
          <Box key={index} w="45px">
            <Image
              src={EXCTRA_IMG_LINK + el?.logo_path}
              alt="icon"
              rounded="10"
            />
            {/* <Text fontSize="10" pt="2">
            2 Season <Badge>HD</Badge>
          </Text> */}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Filtericons;
