import React from 'react'
import { useState,useEffect } from 'react';
function Day7_setTimeout2() {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowMessage(false); // Hide message after 3 seconds
      }, 3000);
  
      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);
  
    return (
      <div>
        {showMessage && <p>This message will disappear after 3 seconds.</p>}
      </div>
    );
}

export default Day7_setTimeout2

