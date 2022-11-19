import { Flex, Grid, Text } from '@chakra-ui/react';
const Rating = ({ data }) => {
  return (
    <Flex gap={14} py={6} 
    
    >
      <Grid gap={2}
 
      >
        <Text>RATING</Text>
        <Text>GENRES</Text>
        <Text>RUNTIME</Text>
        <Text>AGE RATING</Text>
        <Text>DIRECTOR</Text>
      </Grid>
      <Grid gap={2}>
        <Text>{data.vote_average}</Text>
        <Text>{data.vote_average}</Text>
        <Text>{data.vote_average}</Text>
        <Text>{data.vote_average}</Text>
        <Text>{data.vote_average}</Text>
      </Grid>
    </Flex>
  );
};
export default Rating;
