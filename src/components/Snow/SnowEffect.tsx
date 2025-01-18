import React, { useEffect, useState } from "react";
import "./SnowEffect.css";
import { SnowflakeIcon } from "lucide-react";

const SnowFlowerEffect: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    // Generate an array for snowflakes
    const flakes = Array.from({ length: 20 }, (_, i) => i);
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <SnowflakeIcon />
        </div>
      ))}
    </div>
  );
};

export default SnowFlowerEffect;
