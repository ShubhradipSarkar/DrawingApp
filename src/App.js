// import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// const styles = {
//   backgroundColor: 'green',
//   height: '100vh', // Ensure the color covers the entire viewport height
//   margin: 0, // Remove default margin
//   padding: 0, // Remove default padding
//   position: 'relative' // Enable absolute positioning for the cursor tracker
// };

// function App() {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [drawCursor, setDrawCursor] = useState([]);
//   // Function to update cursor position
//   const updateCursorPosition = (event) => {
//     const { clientX, clientY } = event;
//     setCursorPosition({ x: clientX, y: clientY });
//     setDrawCursor(prevNumbers => [...prevNumbers, { x: clientX, y: clientY }]);
//   };
//   return (
//     <div style={styles} onMouseMove={updateCursorPosition}>
//       {/* <div style={{height:'80px', width:'600px', backgroundColor:'yellow', justifyContent:'center'}}>
        
//       </div> */}
//       <div style={{ position: 'absolute', top: cursorPosition.y, left: cursorPosition.x , color:'white'}}>
//         Cursor position: {cursorPosition.x}, {cursorPosition.y}
//       </div>
//       {drawCursor.map((number, index) => (
//           <div key={index} style={{position:'absolute', top: number.y, left: number.x, backgroundColor: 'white', height:'7px', width:'7px'}}></div>
//         ))}
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
  const handleMouseMove = (event) => {
    if (!isDrawing) return;

    const { clientX, clientY } = event;
    const newPosition = { x: clientX, y: clientY };

    setPositions(prevPositions => [...prevPositions, newPosition]);
  };

  // Function to start drawing when mouse is clicked
  const handleMouseDown = (event) => {
    setIsDrawing(true);
    const { clientX, clientY } = event;
    const initialPosition = { x: clientX, y: clientY };

    setPositions(prevPositions => [...prevPositions, initialPosition]);
  };

  // Function to stop drawing when mouse is released
  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div style={styles} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
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
