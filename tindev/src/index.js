import React from "react";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);
YellowBox.ignoreWarnings(["Warning: Can't perform"]);

import Routes from "./routes";

export default function App() {
  return <Routes />;
}
