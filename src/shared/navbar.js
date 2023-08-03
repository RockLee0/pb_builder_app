import React from 'react';
import {Button, Space,Dropdown  } from 'antd';
import Link from "next/link";
import { useSession,  signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()



  const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    width:'100%',
    lineHeight: '64px',
    backgroundColor: '#5b5452',
  };
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/components/CPU_Processor">
          CPU / Processor
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/components/Motherboard">
          Motherboard
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/components/RAM">
          RAM
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/components/Power Supply Unit">
          Power Supply Unit
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/components/Storage Device">
          Storage Device
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/components/Monitor">
        Monitor
        </a>
      ),
    },
    {
      key: '7',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/components/Others">
          Others
        </a>
      ),
    }
  ];
  return (
    <>
    
    <Space style={headerStyle}>
    <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000">
    <Button>Home</Button>
        </a>
    <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/PCBuilder">
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

    </Space>
    
    </>
   
  );
};
export default Navbar;