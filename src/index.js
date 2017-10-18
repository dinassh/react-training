import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Root from "modules/root/components/root";
import buildStore from "build-store";

const store = buildStore();

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);