import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

describe("<App />", () => {
  const mockStore = configureMockStore();

  it("should render", () => {
    const { container } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
  });
});
