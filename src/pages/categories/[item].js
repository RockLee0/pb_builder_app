import React from 'react';
import { Card, Col, Image, Row } from "antd";


import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Navbar from '../../shared/navbar';
import footer from '../../shared/footer'

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
            <Col style={{height:"100" , width:"100%"}} key={product.id} className="gutter-row" span={6}>
              <Card
                hoverable
                cover={
                  <Image
                    src={product?.Image}
                    width={325}
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
    const res = await fetch("https://pc-server.vercel.app/products")
    const products1 = await res.json();
    const products=products1.data;
    const paths = products.map((product)=>({
        params:{item:product.Category}
    }))
    return {
      paths,fallback:false
    };
  }
  
  
  
  export async function getStaticProps(context) {
    const {params}=context;
    const res = await fetch(`https://pc-server.vercel.app/products/search/${params.item}`)
    const allData = await res.json();
    console.log(allData.data)
    return {
      props: {
        products: allData.data,
      }
    };
  }
  