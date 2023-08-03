import { Button } from "antd";
import Image from "next/image";
import Navbar from "../../shared/navbar";

const ProductDetails = ({ product }) => {

  const keyFeaturesArray = Object.entries(product?.KeyFeatures || {});
  const reviewsList = product?.Reviews || [];
    return (
      <>
      
        <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 w-[80%]">
        <div className="w-[50%]">
          <Image  width={"500"} height={"500"} src={product?.Image} alt="" />
        </div>
        <div className="w-[50%] m-[5%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.ProductName}</h1>
          <p className="text-xl">Category: {product?.Category}</p>
          <p className="text-xl">Status: {product?.Status}</p>
          <p className="text-xl">Price: {product?.Price}</p>
          <p className="text-xl">Description: {product?.Description}</p>
          <p className="text-xl">IndividualRating: {product?.IndividualRating}</p>
          <p className="text-xl">AverageRating: {product?.AverageRating}</p>
          <ul className="space-y-1 text-lg">
    {keyFeaturesArray.map(([key, value]) => (
      <li key={key}>
        {key}: {value}
      </li>
    ))}
  </ul>

  <h1>Reviews:</h1>
    <ul className="space-y-4 text-lg">
      {/* Render reviews as list items */}
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
      </>
    
    );
  };
  
  export default ProductDetails;


  export async function getStaticPaths() {
    const res = await fetch("http://localhost:5000/products")
    const products = await res.json();
    const paths = products.map((product)=>({
        params:{productId:product.id}
    }))
    return {
      paths,fallback:false
    };
  }
  


  export async function getStaticProps(context) {
    const {params}=context;
    const res = await fetch(`http://localhost:5000/products/${params.productId}`)
    const allData = await res.json();
    return {
      props: {
        product: allData,
      }
    };
  }
  