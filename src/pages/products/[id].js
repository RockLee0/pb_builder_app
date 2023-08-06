import ProductDetails from "../../components/UI/ProductDetails";


const ProductDetailPage = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailPage;

// Fetch the product data using getServerSideProps
export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`https://pc-server.vercel.app/products/${params.id}`, {
      cache: "no-store",
    });
    const data = await res.json();

    return {
      props: {
        product: data.data,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      notFound: true,
    };
  }
}

