import { useState, useEffect, useRef } from 'react';

/**
 * Hook that delays the execution of a function after a given time when the value changes
 * @param delay - the delay in milliseconds
 * @param callback - the function to be executed after the delay
 * @returns - value - the value to be used
 * @returns - handleChange - the function to be called when the value changes
 * @returns - isTyping - if the value is being changed
 * @returns - reset - the function to reset the value
 */
const useDelayedInput = (delay: number, callback: (name: string) => {}) => {
  const [value, setValue] = useState('');
  const startTimmer = useRef(false);
  const isTyping = value.length > 0;

  useEffect(() => {
    if (!startTimmer.current) return;
    const search = setTimeout(() => {
      callback(value);
    }, delay);
    return () => clearTimeout(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleTextChange = (e: { target: { value: string } }) => {
    startTimmer.current = true;
    setValue(e.target.value);
  };

  const resetText = () => {
    setValue('');
  };

  return { value, handleTextChange, isTyping, resetText };
};

export default useDelayedInput;
