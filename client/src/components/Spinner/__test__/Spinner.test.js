import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './../Spinner';

import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";


it ("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Spinner></Spinner>, div)
})

it ("matches snapshot", () => {
  const tree = renderer.create(<Spinner ></Spinner>).toJSON();
  expect(tree).toMatchSnapshot();
})
