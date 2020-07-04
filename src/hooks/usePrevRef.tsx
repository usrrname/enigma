import { useRef, useEffect } from 'react';

// custom hook for getting previous value 
export function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}