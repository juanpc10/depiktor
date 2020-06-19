import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './../Nav';

import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";


it ("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Nav></Nav>, div)
})

it ("matches snapshot", () => {
  const tree = renderer.create(<Nav ></Nav>).toJSON();
  expect(tree).toMatchSnapshot();
})
