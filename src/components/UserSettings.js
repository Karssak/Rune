import React, { useState } from "react";

const UserSettings = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("general");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return <h1>Hello World!</h1>;
};

export default UserSettings;
