
import React, { useState } from 'react';

const styles = {
  backgroundColor: 'white',
  height: '100vh', // Ensure the color covers the entire viewport height
  margin: 0, // Remove default margin
  padding: 0, // Remove default padding
  position: 'relative', // Enable absolute positioning for the cursor tracker
  cursor: 'grab',
};

function App() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [positions, setPositions] = useState([]);
  const [colors, setColors] = useState(['red', 'green', 'blue', 'yellow', 'black', 'pink']);
  const [bold, setbold] = useState(['3', '7', '11', '15', '19']);
  const [shape, setShape] = useState("");
  const [selectcolors, setSelectColors] = useState("black");
  const [selectbold, setSelectbold] = useState("7");

  // Function to handle mouse move event and update the state array
  const handleMove = (event) => {
    event.preventDefault();
    if(shape==="rectangle"){
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;
      const newPosition = { x: clientX, y: clientY };

    }
    else{
      if (!isDrawing) return;
    
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;
      
      const newPosition = { x: clientX, y: clientY, color: selectcolors, bolds:selectbold};
  
      setPositions(prevPositions => [...prevPositions, newPosition]);
    }
    
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
      {/* <img src="/pencil.png" alt="" style={{height:'70px', width:'70px'}}/> */}
      {/* Your content here */}
      {/* <h3 style={{position:'absolute'}} onClick={()=>{
        if(shape==="rectangle"){
          setShape("");
        }
        else{
          setShape("rectangle")
        }
        }}>Rectangle</h3> */}

      <div style={{position:'absolute'}}>
        {colors.map((clr, index) =>(
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', cursor:'pointer'}}>
            <div style={{height:'20px', width:'20px', display:'flex', margin:'5px', backgroundColor:`${clr}`, cursor:'pointer'}} onClick={()=>{setSelectColors(clr)}}></div>
            {(selectcolors===clr) && <img src='/tick.png' height='20px' width='20px' />}
          </div>
          
        ))}
        {bold.map((b, index) =>(
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', cursor:'pointer'}}><div style={{height:`${b}px`, width:'40px', display:'flex', marginTop:'15px', marginLeft:'5px', backgroundColor:`black`}} onClick={()=>{setSelectbold(b)}}></div>
          {(selectbold===b) && <img src='/tick.png' height='20px' width='20px' />}
          </div>
          
        ))}
      </div>
      {positions.map((position, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            backgroundColor: position.color,
            width: `${position.bolds}px`,
            height: `${position.bolds}px`,
            borderRadius: '50%' // Make the drawn dots round
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
