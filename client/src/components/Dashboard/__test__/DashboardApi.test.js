import React from "react";
import {
  act,
  render,
  wait,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  screen,
  cleanup,
  waitForDomChange,
  getAllByTestId,
} from "@testing-library/react";
import Dashboard from "../Dashboard";

import api from "../../../ApiClient.js";
jest.mock("../../../ApiClient.js");

const fakeTech = {
  Tests1: {
    labels: [
      "2020-06-16T22:32:06.028Z",
      "2020-06-16T23:32:04.706Z",
      "2020-06-17T00:32:05.430Z",
      "2020-06-17T01:32:04.588Z",
      "2020-06-17T02:32:05.170Z",
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

afterEach(cleanup);

describe("loads api data correctly", () => {
  let apicall;
  test("api get called", async () => {
    api.getTechnologies.mockResolvedValue(fakeTech);
    apicall = await api.getTechnologies();
    expect(apicall).toEqual(fakeTech);
    expect.assertions(1);
  });
  test("api gets called only once", async () => {
    api.getTechnologies.mockResolvedValue(fakeTech);
    const getSpy = jest.spyOn(api, "getTechnologies");
    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(getSpy).toHaveBeenCalledWith();
    expect.assertions(2);
  });
  test("api data is of right format", () => {
    Object.keys(apicall).map((key) => {
      fakeTech[key].datasets.map((dataobj) => {
        expect(dataobj).toHaveProperty("label");
        expect(dataobj).toHaveProperty("data");
        expect(dataobj).toHaveProperty("backgroundColor");
        expect(dataobj).toHaveProperty("borderColor");
        expect(dataobj).toHaveProperty("fill");
      });
    });
    expect.assertions(20);
  });

  describe("render testing", () => {
    test("reders", async () => {
      const { getByText, getByTestId, queryByText } = render(
        <Dashboard tech={fakeTech} />
      );
      // expect(getByTestId("spinner")).toBeInTheDocument();
      // await waitForDomChange();
      expect(getByText("Tests1")).toBeInTheDocument();
      expect(getByText("Tests2")).toBeInTheDocument();
    });
  });
});
