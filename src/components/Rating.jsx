import { Flex, Grid, Text, Box } from '@chakra-ui/react';
const Rating = ({ data }) => {
  return (
    <Grid gap={2} py={6} justifyContent="space-between">
      <Flex gap={14}>
        <Text>RATING</Text>
        <Text>{data.vote_average}</Text>
      </Flex>
      <Flex gap={12}>
        <Text>GENRES</Text>
        <Text>
          {data?.genres?.map((el, index) =>
            index !== data.genres.length - 1 ? el.name + ' | ' : el.name
          )}
        </Text>
      </Flex>
      <Flex gap={10}>
        <Text>RUNTIME</Text>
        <Text>{data.runtime}</Text>
      </Flex>

      {/* <Box gap={2}>
        <Text>RATING</Text>
        <Text>GENRES</Text>
        <Text>RUNTIME</Text>
        <Text>AGE RATING</Text>
        <Text>DIRECTOR</Text>
      </Box>
      <Grid gap={2}>
        <Text>{data.vote_average}</Text>

        <Text>{data?.genres?.map(el => el.name + ' | ')}</Text>
        <Text>{data?.runtime}</Text>
        <Text>{data.vote_average}</Text>
        <Text>{data.vote_average}</Text>
      </Grid> */}
    </Grid>
  );
};
export default Rating;
