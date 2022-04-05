import { useToast } from 'native-base';
import { useEffect } from 'react';

const useErrorToast = (error) => {
  const toast = useToast();
  useEffect(() => {
    if (error !== null) {
      const message = error?.message;

      toast.show({
        title: 'Something went wrong',
        status: 'error',
        description: message ?? 'An error occurred',
      });
    }

    return () => toast.closeAll();
  }, [error]);
};

export default useErrorToast;
