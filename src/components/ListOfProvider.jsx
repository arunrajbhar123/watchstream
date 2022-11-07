import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const ListOfProvider = ({ icon }) => {
 
  return (
    <Image src={icon} alt="icon" width="3rem" rounded={10} cursor="pointer" />
  );
};

export default ListOfProvider;
