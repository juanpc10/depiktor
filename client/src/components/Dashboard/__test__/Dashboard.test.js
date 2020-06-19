import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './../Dashboard';

import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";


it ("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Dashboard></Dashboard>, div)
})

it ("matches snapshot", () => {
  const tree = renderer.create(<Dashboard label="save"></Dashboard>).toJSON();
  expect(tree).toMatchSnapshot();
})
