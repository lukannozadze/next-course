import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ProductDetailsLayout({ children }:Props){
  return (
    <>
      {children}
      <h1>Features products</h1>;
    </>
  );
}
