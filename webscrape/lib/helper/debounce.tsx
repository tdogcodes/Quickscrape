import React from "react";

const useDebounce = ({
  time,
  inputVal,
}: {
  time: number;
  inputVal: any;
}) => {
  const [debouncedValue, setDebouncedValue] = React.useState(inputVal);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputVal);
      console.log("Debounced Value:", inputVal); // Debugging log
    }, time);

    return () => {
      clearTimeout(handler);
    };
  }, [time, inputVal]);

  return debouncedValue;
};

export default useDebounce;
