import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../shared/navbar.js'
import AllProducts from '../components/UI/AllProducts.js'
import AllCategories from '../components/UI/AllCategories.js'
import AllThings from '../components/UI/AllThings.js'
import Banner from '../components/UI/Banner.js'

export default function Home({data}) {
  
  return (
<>
    <Banner></Banner>
   <AllProducts products={data}></AllProducts>
   {/* <AllCategories></AllCategories> */}
   <AllThings></AllThings>
</>
  )
}


export async function getStaticProps() {
  const res = await fetch("https://pc-server.vercel.app/products")
  const allData1 = await res.json();
  const allData=allData1.data;
  // Create an empty array to store limited data
  const limitedData = [];

  // Create an object to track the number of products per category added to limitedData
  const categoriesCount = {};

  for (const product of allData) {
    if (limitedData.length >= 6) {
      break; // Stop adding products once we have 6
    }
   

    if (!categoriesCount[product.Category]) {
      // If category is not present in categoriesCount, add the product and set count to 1
      limitedData.push(product);
      categoriesCount[product.Category] = 1;
    } else if (categoriesCount[product.Category] < 2) {
      // If category is present but less than 2 products added, add the product
      limitedData.push(product);
      categoriesCount[product.Category]++;
    }
  }

  // If there are still fewer than 6 products, add more products from other categories
  while (limitedData.length < 6) {
    const productToAdd = allData.find((product) => !categoriesCount[product.Category]);
    if (productToAdd) {
      limitedData.push(productToAdd);
      categoriesCount[productToAdd.Category] = 1;
    } else {
      break; // No more products to add from other categories
    }
    console.log(limitedData);
  }

  return {
    props: {
      data: limitedData,
    },
  };
}
