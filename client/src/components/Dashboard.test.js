import React from "react";
import {
  act,
  render,
  wait,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  screen,
  cleanup
} from "@testing-library/react";
import Dashboard from "./Dashboard";

import api from "../ApiClient.js";
jest.mock('../ApiClient.js');


describe("loads api data correctly", () => {
  afterEach(cleanup);
  test("render tech", async () => {
    const fakeTech = {
      Tests1: {
        labels: [
          "2020-06-16T22:32:33.400Z",
          "2020-06-16T23:32:27.032Z",
          "2020-06-17T00:32:25.507Z",
          "2020-06-17T01:32:24.969Z",
          "2020-06-17T02:32:25.878Z",
        ],
        datasets: [
          {
            label: "testLabel1",
            data: [400, 300, 400, 300, 400],
            backgroundColor: "hsla(93,70%,80%, 1)",
            borderColor: "hsla(93,70%,80%, 1)",
            fill: false,
          },
          {
            label: "testLabel2",
            data: [600, 500, 600, 500, 600],
            backgroundColor: "hsla(173,70%,80%, 1)",
            borderColor: "hsla(173,70%,80%, 1)",
            fill: false,
          },
        ],
      },
      Tests2: {
        labels: [
          "2020-06-16T22:32:33.400Z",
          "2020-06-16T23:32:27.032Z",
          "2020-06-17T00:32:25.507Z",
          "2020-06-17T01:32:24.969Z",
          "2020-06-17T02:32:25.878Z",
        ],
        datasets: [
          {
            label: "testLabel1",
            data: [400, 300, 400, 300, 400],
            backgroundColor: "hsla(93,70%,80%, 1)",
            borderColor: "hsla(93,70%,80%, 1)",
            fill: false,
          },
          {
            label: "testLabel2",
            data: [600, 500, 600, 500, 600],
            backgroundColor: "hsla(173,70%,80%, 1)",
            borderColor: "hsla(173,70%,80%, 1)",
            fill: false,
          },
        ],
      },
    };

    const getSpy = jest.spyOn(api, 'getTechnologies');
    let promise = Promise.resolve(fakeTech);

    api.getTechnologies.mockImplementation(() => {
      return promise;
    });

 
    const { getByText, getBy, queryByText } = render(<Dashboard />);
    expect(getSpy).toBeCalled();    
    expect(getByText("Tests1")).toBeInTheDocument();
    expect(getByText("Tests2")).toBeInTheDocument();
  });
});
