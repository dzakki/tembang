import axios, { CancelTokenSource } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

const ITUNES_URL = 'https://itunes.apple.com/';

export const useGetItunes = (search: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cancelRequestRef = useRef<CancelTokenSource>(null);
  const cachedIsloading = useRef(false);

  const getItunes = useCallback(async () => {
    try {
      // to cancel multiple requests
      if (cachedIsloading.current) {
        setIsLoading(true);
        cachedIsloading.current = false
        return cancelRequestRef.current?.cancel()
      }
      setIsLoading(true);
      cachedIsloading.current = true
      const { data } = await axios.get(`${ITUNES_URL}search`, {
        params: {
          term: search,
          limit: 100,
          media: ['music'],
        },
        cancelToken: cancelRequestRef.current?.token,
      });

      setData(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      cachedIsloading.current = false
    }
  }, [search]);

  useEffect(() => {
    if (search) {
      getItunes();
    }
  }, [getItunes, search]);

  return {
    isLoading,
    data,
  };
};

