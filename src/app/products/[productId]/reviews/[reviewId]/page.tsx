import { notFound } from "next/navigation";

type Params = {
  params: { productId: string; reviewId: string };
};

export default function ReviewDetail({ params }: Params) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
