# Star Rating React Component

## Overview
This React component is a customizable star rating system, providing a dynamic and interactive way for users to rate content. Stars change color on hover, and clicking locks in the selected rating. It's a great project for reinforcing key React concepts such as state management, event handling, and dynamic styling.

## Concepts Used

### 1. State Management with `useState`
The component utilizes the `useState` hook to manage three key states:
- `current`: Represents the currently hovered star.
- `selected`: Represents the selected star, locked in by clicking.
- `move`: A boolean state controlling the ability to move and select stars.

```jsx
const [current, setCurrent] = useState(-1);
const [selected, setSelected] = useState(-1);
const [move, setMove] = useState(true);
```

### 2. Event Handling
The `mouseMovee` function is triggered on mouse movement over a star. It updates the `current` state only if the current hovered star is different, and `move` is true.

```jsx
function mouseMovee(i) {
  if (current !== i && move) {
    setCurrent(i);
  }
}
```

The `select` function is triggered on star click. It toggles the `move` state and sets the `selected` state to the currently hovered star.

```jsx
function select() {
  setMove(!move);
  setSelected(current);
}
```

### 3. Dynamic Styling
The `StyleCondition` function dynamically determines the styling of each star based on its index relative to the `current` state. Stars with an index less than or equal to `current` are styled with a yellow color, while the others are white.

```jsx
function StyleCondition(index) {
  if (index <= current) {
    return { color: "yellow" };
  } else {
    return { color: "white" };
  }
}
```

### 4. Rendering Stars
The component renders a set of stars using the `react-icons` library and applies dynamic styling based on the `StyleCondition` function.

```jsx
return (
  <div style={{ border: "solid" }}>
    {[...Array(IconsNumber)].map((_, index) => {
      return (
        <FaStar
          style={StyleCondition(index)}
          key={index}
          size="5em"
          onMouseMove={() => mouseMovee(index)}
          onClick={() => select()}
        />
      );
    })}
  </div>
);
```

## Getting Started
1. Install dependencies:
   ```bash
   npm install react react-dom react-icons
   ```

2. Copy the `Star.js` component into your React project.

3. Import and use the `Star` component in your desired React file:
   ```jsx
   import React from "react";
   import Star from "./Star";

   function App() {
     return (
       <div>
         <h1>Star Rating Component</h1>
         <Star IconsNumber={5} />
       </div>
     );
   }

   export default App;
   ```

4. Customize the number of stars by adjusting the `IconsNumber` prop.

## Features
- Dynamic star rating display.
- Real-time color changes on hover.
- Click to select and lock in the rating.

## Author
Ritick Lath

Feel free to contribute, report issues, or suggest improvements. Happy coding! 🚀

