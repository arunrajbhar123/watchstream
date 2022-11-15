import {
  Input,
  RangeSliderFilledTrack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderThumb,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
const Years = () => {
  const [sortByYear, setSortByYear] = useState([]);
  return (
    <Box>
      <RangeSlider
        colorScheme="pink"
        defaultValue={[0, 2022]}
        min={1999}
        max={2022}
        direction="ltr"
        isDisabled={false}
        onChange={e => {
          setSortByYear(e);
        }}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </Box>
  );
};
export default Years;
