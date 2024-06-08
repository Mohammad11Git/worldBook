import React from "react";
import { Link } from "react-router-dom";
import userImg from "../assets/profile.jpg"
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
const SiBar = () => {
    return ( 
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
        Flowbite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item  icon={HiChartPie}>
            <Link to="/admin/dashboard">
            Dashboard
            </Link>
          </Sidebar.Item>
          <Sidebar.Item  icon={HiOutlineCloudUpload}>
            <Link to="/admin/dashboard/upload">
              Upload Book
            </Link>
          </Sidebar.Item>
          <Sidebar.Item  icon={HiInbox}>
             <Link to="/admin/dashboard/manage">
              Manage Books
             </Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

     );
}

export default SiBar;