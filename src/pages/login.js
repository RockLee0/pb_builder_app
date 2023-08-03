import { useForm } from "react-hook-form"
import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import Navbar from "../shared/navbar"


const LoginPage = () => {
  return (
   <>
   
     <div>
    
    <Head>
      <title>Next Login</title>
    </Head>
    
    <div className={styles.form}>
      <h3>LOGIN with GITHUB account</h3>
      <div className={styles.social_icons}>
      <GithubOutlined onClick={()=>signIn("github",{
        callbackUrl:"http://localhost:3000/"
      })} /> 
      </div>
    </div>
  </div>
   </>

  );
};

export default LoginPage;