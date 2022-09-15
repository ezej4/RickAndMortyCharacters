import { useState, useEffect, useRef } from 'react';

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
  }, [callback, delay, value]);

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
