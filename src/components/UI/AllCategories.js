import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Products from "../UI/Products"
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllCategories = () => {
  const categories =[ "CPU_Processor","Motherboard","RAM","Power Supply Unit","Storage Device","Monitor","Others"]
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
          
        }}
      >
        #OUR FEATURED CATEGORIES
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {categories?.map((category) => (
          <Col key={category} className="gutter-row" span={6}>
            <Card style={{
                  backgroundColor:"gray",
                  height:"100%"
                }}
              
              hoverable
            >
             
              <p
                style={{
                  display: "grid",
                  justifyContent: "center",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  color: "white",
                  fontSize: "15px",
                    marginTop: "20px",
                  
                }}
              >  
               <span> {category} </span> 
              </p>


              <Link style={{justifyContent:"center",marginLeft:"50px"}}  href={`/categories/${category}`}>
                <Button
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "danger",
                    color: "white",
                    width: "80%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                    justifyContent: "center" 
                  }}
                >
                  Explore
                </Button>
              </Link>
            </Card> 
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllCategories;




