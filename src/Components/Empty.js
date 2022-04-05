import { Heading, HStack } from 'native-base';

function Loading() {
  return (
    <HStack my={5} justifyContent="center">
      <Heading color="info.500" fontSize="md">
        There is nothing here...
      </Heading>
    </HStack>
  );
}

export default Loading;
