import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-page">
        <h1 className="loader"></h1>
      </div>
    );
  }
  return (
    <div className="content">
      <TodoList />
    </div>
  );
};

export default LoadingPage;
