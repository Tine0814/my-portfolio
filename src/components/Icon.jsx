import React from "react";

const ProgrammingIcon = () => {
  const [rotation, setRotation] = React.useState(0);

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const newRotation = {
      x: -(y - 0.5) * 40,
      y: (x - 0.5) * 40,
    };
    setRotation(newRotation);
  };

  return (
    <div className="programming-icon-container" onMouseMove={handleMouseMove}>
      <div
        className="programming-icon"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      />
    </div>
  );
};

export default ProgrammingIcon;
