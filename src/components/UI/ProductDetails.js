import { Button } from "antd";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const keyFeaturesArray = Object.entries(product?.KeyFeatures || {});
  const reviewsList = product?.Reviews || [];

  return (
    <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 w-[80%]">
      <div className="w-[50%]">
        <Image width={"500"} height={"500"} src={product?.Image} alt="" />
      </div>
      <div className="w-[50%] m-[5%] space-y-3">
        {/* Product details */}
        <h1 className="text-3xl font-semibold">{product?.ProductName}</h1>
        <p className="text-xl">Category: {product?.Category}</p>
        <p className="text-xl">Status: {product?.Status}</p>
        <p className="text-xl">Price: {product?.Price}</p>
        <p className="text-xl">Description: {product?.Description}</p>
        <p className="text-xl">IndividualRating: {product?.IndividualRating}</p>
        <p className="text-xl">AverageRating: {product?.AverageRating}</p>

        {/* Key features */}
        <ul className="space-y-1 text-lg">
          {keyFeaturesArray.map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>

        {/* Reviews */}
        <h1>Reviews:</h1>
        <ul className="space-y-4 text-lg">
          {reviewsList.map((review, index) => (
            <li key={index}>
              Rating: {review.Rating}
              <p>{review.Comment}</p>
            </li>
          ))}
        </ul>

        <Button type="primary" danger>
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
