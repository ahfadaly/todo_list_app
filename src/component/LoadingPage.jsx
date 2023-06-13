import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Header from "./Header";

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
      <Header />
      <TodoList />
    </div>
  );
};

export default LoadingPage;
