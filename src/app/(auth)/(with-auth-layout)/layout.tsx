import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }:Props){
  return (
    <>
      <h2>Inner Layout</h2>;
      {children}
    </>
  );
}
