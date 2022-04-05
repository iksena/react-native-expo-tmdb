import { Heading, HStack, Spinner } from 'native-base';

function Loading() {
  return (
    <HStack space={2} my={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
}

export default Loading;
