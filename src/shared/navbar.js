import React from 'react';
import {Button, Space,Dropdown  } from 'antd';
import Link from "next/link";
import { useSession,  signOut } from "next-auth/react"
import { Input } from 'antd';
const { Search } = Input;


const Navbar = () => {
  const { data: session } = useSession()



  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    width:'100%',
    lineHeight: '64px',
    backgroundColor: ' #5F9EA0',
  };
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://pc-builder-app-alpha.vercel.app/components/CPU_Processor">
          CPU / Processor
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://pc-builder-app-alpha.vercel.app/components/Motherboard">
          Motherboard
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://pc-builder-app-alpha.vercel.app/components/RAM">
          RAM
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://pc-builder-app-alpha.vercel.app/components/Power Supply Unit">
          Power Supply Unit
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://pc-builder-app-alpha.vercel.app/components/Storage Device">
          Storage Device
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://pc-builder-app-alpha.vercel.app/components/Monitor">
        Monitor
        </a>
      ),
    },
    {
      key: '7',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://pc-builder-app-alpha.vercel.app/components/Others">
          Others
        </a>
      ),
    }
  ];
  return (
    <>
    
    <Space style={headerStyle}>
    <a target="_blank" rel="noopener noreferrer" href="https://pc-builder-app-alpha.vercel.app/">
    <Button>Home</Button>
        </a>
    <a target="_blank" rel="noopener noreferrer" href="https://pc-builder-app-alpha.vercel.app/PCBuilder">
    <Button>PC Builder</Button>
        </a>
   
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow={{
        pointAtCenter: true,
      }}
    >
    <Button type="dashed">Categories</Button>
    </Dropdown>


        {session?.user?<items>
          <Button onClick={()=>signOut()} type="primary" danger>
            Logout
          </Button>
        </items>:
        <Link style={{ textDecoration: "none", color: "white" }} href="/login">       
          <Button type="dashed" danger>
            Login
          </Button>          
        </Link>       
        }

<Search style={{padding:"9px"}} placeholder="input search text" enterButton="Search" size="large" />



    </Space>
    
    </>
   
  );
};
export default Navbar;