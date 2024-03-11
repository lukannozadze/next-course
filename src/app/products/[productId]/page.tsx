import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 500);
  });
  return {
    title: `Product ${title}`,
  };
};
type Params = {
  params: { productId: string };
};

export default function ProductDetails({ params }: Params) {
  return <h1>Details About product {params.productId}</h1>;
}
