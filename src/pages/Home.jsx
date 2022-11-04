import { Box, Image } from '@chakra-ui/react';
import bgtitle from '../asset/bg-tiles.webp';
import tvframe from '../asset/tv.webp';
const Home = () => {
  return (
    <Box pt="3em" bgImage={bgtitle} h="100vh" w="100%">
      <Image src={tvframe} alt="tv" mb={'25rem'} />
    </Box>
  );
};
export default Home;
