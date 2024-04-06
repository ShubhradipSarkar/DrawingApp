// import React, { useState } from 'react';

// const styles = {
//   backgroundColor: 'green',
//   height: '100vh', // Ensure the color covers the entire viewport height
//   margin: 0, // Remove default margin
//   padding: 0, // Remove default padding
//   position: 'relative' // Enable absolute positioning for the cursor tracker
// };

// function App() {
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [positions, setPositions] = useState([]);

//   // Function to handle mouse move event and update the state array
//   const handleMouseMove = (event) => {
//     if (!isDrawing) return;

//     const { clientX, clientY } = event;
//     const newPosition = { x: clientX, y: clientY };

//     setPositions(prevPositions => [...prevPositions, newPosition]);
//   };

//   // Function to start drawing when mouse is clicked
//   const handleMouseDown = (event) => {
//     setIsDrawing(true);
//     const { clientX, clientY } = event;
//     const initialPosition = { x: clientX, y: clientY };

//     setPositions(prevPositions => [...prevPositions, initialPosition]);
//   };

//   // Function to stop drawing when mouse is released
//   const handleMouseUp = () => {
//     setIsDrawing(false);
//   };

//   return (
//     <div style={styles} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
//       {/* Your content here */}
//       {positions.map((position, index) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             top: position.y,
//             left: position.x,
//             backgroundColor: 'white',
//             width: '7px',
//             height: '7px',
//             borderRadius: '50%' // Make the drawn dots round
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

const styles = {
  backgroundColor: 'green',
  height: '100vh', // Ensure the color covers the entire viewport height
  margin: 0, // Remove default margin
  padding: 0, // Remove default padding
  position: 'relative' // Enable absolute positioning for the cursor tracker
};

function App() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [positions, setPositions] = useState([]);

  // Function to handle mouse move event and update the state array
  const handleMove = (event) => {
    event.preventDefault();
    if (!isDrawing) return;
    
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    
    const newPosition = { x: clientX, y: clientY };

    setPositions(prevPositions => [...prevPositions, newPosition]);
  };

  // Function to start drawing when mouse is clicked or touched
  const startDrawing = (event) => {
    event.preventDefault();
    setIsDrawing(true);
    handleMove(event);
  };

  // Function to stop drawing when mouse is released or touch ends
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div
      style={styles}
      onMouseMove={handleMove}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onTouchMove={handleMove}
      onTouchStart={startDrawing}
      onTouchEnd={stopDrawing}
    >
      {/* Your content here */}
      {positions.map((position, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            backgroundColor: 'white',
            width: '7px',
            height: '7px',
            borderRadius: '50%' // Make the drawn dots round
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
