"use client";

import { Provider } from "react-redux";
import { store } from "./store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // debug: log on provider render
  if (typeof window !== "undefined") console.log("ReduxProvider rendered");
  return <Provider store={store}>{children}</Provider>;
}
