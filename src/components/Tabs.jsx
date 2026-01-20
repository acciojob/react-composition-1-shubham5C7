import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
 
      <div style={{ display: "flex ", gap: "10px", cursor: "pointer" }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              padding: "10px 15px",
              borderBottom: activeIndex === index ? "2px solid blue" : "2px solid transparent",
              fontWeight: activeIndex === index ? "bold" : "normal"
            }}
          >
            {tab.title}
          </div>
        ))}
      </div>

  
      <div style={{ marginTop: "20px" }}>
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
