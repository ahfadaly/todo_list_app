import React, { useState, useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="header p-3 shadow-sm border-bottom">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h3 className="fw-bold">Todo List</h3>
          <button className="btn shadow-sm pe-auto" onClick={handleToggle}>
            <span>💡</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
