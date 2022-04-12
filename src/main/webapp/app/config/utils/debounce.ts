import { useEffect, useState } from 'react';

/**
 * Fucntion for implement debounce
 */
export const useDebounce = (value: any, delay?: number, setSearching?: any) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (setSearching) {
      setSearching(true);
    }

    const handler = setTimeout(
      () => {
        setDebouncedValue(value);

        if (setSearching) {
          setSearching(false);
        }
      },
      delay ? delay : 1000
    );

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};
