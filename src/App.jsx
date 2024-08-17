import React from "react";
import {NetFlixSeries, Header,Footer} from "./Components/NetFlixSeries";

// Define NetFlixSeries before App


export const App = () => {
  console.log('Rendering the App component');

  return (
    <>
    <Header/>
      <NetFlixSeries />
      <NetFlixSeries />
      <NetFlixSeries />
      <NetFlixSeries />
      <NetFlixSeries />
      <Footer/>
    </>
  );
};
