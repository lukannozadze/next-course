type Params = {
  params: { productId: string }
};

export default function ProductDetails({params}:Params) {
  return <h1>Details About product {params.productId}</h1>;
}
