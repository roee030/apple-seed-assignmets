import React from "react";
import "./App.css";
import Card from "./Card";
function App() {
  const pic1 = `https://media-cdn.tripadvisor.com/media/photo-s/13/9f/39/d1/cape-view-clifton.jpg`;
  const pic2 = `https://pix10.agoda.net/hotelImages/149/149052/149052_15012019550024720287.jpg?s=1024x768`;
  const pic3 = `https://cf.bstatic.com/images/hotel/max1024x768/243/243642112.jpg`;

  return (
    <div className="App">
      <header className="App-header">
        <Card description="description1" title="title1" src={pic1}></Card>
        <Card description="description1" title="title2" src={pic2}></Card>
        <Card description="description1" title="title3" src={pic3}></Card>
      </header>
    </div>
  );
}

export default App;
