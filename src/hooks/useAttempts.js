import React, { useState } from "react";

export const useAttempts = (initialValue = 0) => {
  const [attempts, setAttempts] = useState(initialValue);

  const incrementAttempt = () => {
    setAttempts((prevState) => prevState + 1);
  };

  const resetAttempts = () => {
    setAttempts(initialValue);
  };

  return {
    attempts,
    incrementAttempt,
    resetAttempts,
  };
};
