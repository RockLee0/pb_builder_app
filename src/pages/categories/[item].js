import React from 'react';
import { Card, Col, Row } from "antd";
import Image from "next/image";

import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const items = ({products}) => {
  console.log(products)
    return (
        <>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            margin: "30px 0px",
          }}
        >
          #OUR FEATURED PRODUCTS
        </h1>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {products?.map((product) => (
            <Col key={product.id} className="gutter-row" span={6}>
              <Card
                hoverable
                cover={
                  <Image
                    src={product?.image}
                    width={500}
                    height={200}
                    responsive
                    alt="product image"
                  />
                }
              >
      
                <p
                  style={{
                    display: "grid",
                    justifyContent: "space-between",
                    width: "100%",
                    color: "gray",
                    margin: "10px 0px",
                    fontSize: "12px",
                  }}
                >
                  <span>
                  Product Name: {product?.ProductName}
                
                  </span>
                  <span>
                  Category: {product?.Category}
               
                  </span>
                  <span>
                  Price: {product?.Price}
         
                  </span>
                  <span>
                  Status : {product?.Status}
               
                  </span>
                  <span>
                  Rating : {product?.Rating}
                  </span>
                </p>
                <Link href={"http://localhost:3000/PCBuilder"}>
                  <p
                    style={{
                      fontSize: "15px",
                      marginTop: "20px",
                      backgroundColor: "black",
                      color: "white",
                      width: "100%",
                      padding: "2px 5px ",
                      fontWeight: "300",
                      letterSpacing: "3px",
                      textAlign: "center",
                    }}
                  >
                   Choose 
                  </p>
                </Link>
              </Card> 
            </Col>
          ))}
        </Row>
      </>
    );
};

export default items;


export async function getStaticPaths() {
    const res = await fetch("http://localhost:5000/products")
    const products = await res.json();
    const paths = products.map((product)=>({
        params:{item:product.Category}
    }))
    return {
      paths,fallback:false
    };
  }
  
  
  
  export async function getStaticProps(context) {
    const {params}=context;
    const res = await fetch(`http://localhost:5000/products?Category=${params.item}`)
    const allData = await res.json();
    console.log(allData)
    return {
      props: {
        products: allData,
      }
    };
  }
  