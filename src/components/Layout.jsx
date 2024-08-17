import { Suspense } from "react";
import Header from "./header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};
