import { useCallback, useRef, useEffect } from 'react';

/**
 * Custom hook that throttles a callback function
 * Ensures the callback is called at most once per delay period
 * 
 * @param callback - The function to throttle
 * @param delay - The throttle delay in milliseconds
 * @returns A throttled version of the callback
 */
export function useThrottle<T extends (...args: never[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const lastCallRef = useRef(0);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const callbackRef = useRef(callback);

  // Keep callback ref up to date
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCallRef.current;

      const callFunction = () => {
        lastCallRef.current = now;
        callbackRef.current(...args);
      };

      if (timeSinceLastCall >= delay) {
        if (timeoutIdRef.current) {
          clearTimeout(timeoutIdRef.current);
          timeoutIdRef.current = null;
        }
        callFunction();
      } else if (!timeoutIdRef.current) {
        timeoutIdRef.current = setTimeout(() => {
          callFunction();
          timeoutIdRef.current = null;
        }, delay - timeSinceLastCall);
      }
    },
    [delay]
  );
}

/**
 * Custom hook that debounces a callback function
 * Delays calling the callback until after delay milliseconds have elapsed
 * since the last time the debounced function was invoked
 * 
 * @param callback - The function to debounce
 * @param delay - The debounce delay in milliseconds
 * @returns A debounced version of the callback
 */
export function useDebounce<T extends (...args: never[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const callbackRef = useRef(callback);

  // Keep callback ref up to date
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }

      timeoutIdRef.current = setTimeout(() => {
        callbackRef.current(...args);
        timeoutIdRef.current = null;
      }, delay);
    },
    [delay]
  );
}

