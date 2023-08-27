import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badges/Badge"

function App() {
  return (
    <Badge varient="square" color="red" size="sm" className="badge">
      Test
    </Badge>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
