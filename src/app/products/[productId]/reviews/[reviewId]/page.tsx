type Params = {
  params: { productId: string; reviewId: string };
};

export default function ReviewDetail({ params }: Params) {
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
