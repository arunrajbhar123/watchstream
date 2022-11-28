import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import bgtitle from '../asset/bg-tiles.webp';
import tvframe from '../asset/tv.webp';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from './../context api/ContextProvider';
import Loader from './../components/Loader';
const Home = () => {
  const { country } = useContext(MovieContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
    if (country?.country_code) {
      onClose();
      navigate(`/${country?.country_code?.toLowerCase()}`);
    }
  }, [country]);

  return (
    <Box pt="3em" bgImage={bgtitle} h="100vh" w="100%">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody textAlign="center" p="8">
            <Loader />
            <Text>Wait until to redirecting</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Image src={tvframe} alt="tv" mb={'25rem'} />
    </Box>
  );
};
export default Home;
