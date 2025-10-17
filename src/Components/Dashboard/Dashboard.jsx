import React, { useEffect, useState } from "react";
import { supabase } from "../Auth/Supabase";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Button, Drawer } from "antd";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Cloths from "../Items/Cloths/Cloths";
import Electronic from "../Items/Electronic/Electronic";
import HouseHold from "../Items/HouseHold/HouseHold";

import Men from "../Items/Cloths/Man";
import Women from "../Items/Cloths/Women";
import Kids from "../Items/Cloths/Kids";

import Mobiles from "../Items/Electronic/Mobiles";
import Laptops from "../Items/Electronic/Laptops";
import Tablets from "../Items/Electronic/Tablets";

import Furniture from "../Items/HouseHold/Furniture";
import Kitchen from "../Items/HouseHold/Kitchen";
import Decor from "../Items/HouseHold/Decor";

const { Header, Content, Sider } = Layout;

const topMenu = [
  { key: "/dashboard/home", label: "🏠 Home" },
  { key: "/dashboard/about", label: "ℹ️ About" },
  { key: "/dashboard/contact", label: "📞 Contact" },
  { key: "/Login", label: "Logout 🔓" },
];

const sideMenu = [
  {
    key: "electronic",
    icon: <LaptopOutlined />,
    label: "Electronics",
    children: [
      { key: "/dashboard/electronic/mobiles", label: "Mobiles" },
      { key: "/dashboard/electronic/laptops", label: "Laptops" },
      { key: "/dashboard/electronic/tablets", label: "Tablets" },
    ],
  },
  {
    key: "cloths",
    icon: <UserOutlined />,
    label: "Cloths",
    children: [
      { key: "/dashboard/cloths/men", label: "Men" },
      { key: "/dashboard/cloths/women", label: "Women" },
      { key: "/dashboard/cloths/kids", label: "Kids" },
    ],
  },
  {
    key: "household",
    icon: <NotificationOutlined />,
    label: "House Hold",
    children: [
      { key: "/dashboard/household/furniture", label: "Furniture" },
      { key: "/dashboard/household/kitchen", label: "Kitchen" },
      { key: "/dashboard/household/decor", label: "Decor" },
    ],
  },
];

export default function DashboardLayout() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const navigate = useNavigate();

  const hideSidebar = ["/dashboard/about", "/dashboard/contact"].includes(
    location.pathname
  );

  const [userName, setUserName] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarDrawerVisible, setSidebarDrawerVisible] = useState(false);
  const [topMenuDrawerVisible, setTopMenuDrawerVisible] = useState(false);

  useEffect(() => {
    getUserName();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  async function getUserName() {
    const { data, error } = await supabase.auth.getUser();
    if (error) return console.error("Error:", error.message);
    if (data?.user) setUserName(data.user.user_metadata?.name || "User");
  }

  function handleResize() {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Logout error:", error.message);
    else navigate("/Components/Login/Login");
  }

  const SidebarMenu = (
    <Menu
      mode="inline"
      selectedKeys={[location.pathname]}
      defaultOpenKeys={["electronic"]}
      style={{ height: "100%", borderInlineEnd: 0, fontSize: 15 }}
      items={sideMenu}
      onClick={(e) => {
        navigate(e.key);
        if (isMobile) setSidebarDrawerVisible(false);
      }}
    />
  );

  const TopMenuItems = (
    <Menu
      theme="dark"
      mode="vertical"
      selectedKeys={[location.pathname]}
      items={topMenu}
      onClick={(e) => {
        if (e.key === "logout") handleLogout();
        else navigate(e.key);
        if (isMobile) setTopMenuDrawerVisible(false);
      }}
      style={{ borderRadius: 0 }}
    />
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#001529",
          padding: "0 20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          {/* Sidebar toggle for mobile */}
          {!hideSidebar && isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined style={{ color: "#fff", fontSize: 20 }} />}
              onClick={() => setSidebarDrawerVisible(true)}
            />
          )}

          <img
            style={{ height: 50, borderRadius: 10 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoL64W266YjIeaLlYi0fVRdg8jHFksCILpA&s"
            alt="logo"
          />

          <h1 style={{ color: "#fff", margin: 0, fontSize: 20 }}>
            🛒 Welcome {userName}!
          </h1>
        </div>

        {/* Top menu toggle for mobile */}
        {isMobile && (
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: "#fff", fontSize: 20 }} />}
            onClick={() => setTopMenuDrawerVisible(true)}
          />
        )}

        {/* Desktop top menu */}
        {!isMobile && (
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={topMenu}
            onClick={(e) => {
              if (e.key === "logout") handleLogout();
              else navigate(e.key);
            }}
            style={{
              borderRadius: 8,
              background: "rgba(255,255,255,0.05)",
              minWidth: 300,
            }}
          />
        )}
      </Header>

      <Layout style={{ marginTop: 64 }}>
        {/* Desktop sidebar */}
        {!hideSidebar && !isMobile && (
          <Sider
            width={220}
            style={{
              position: "fixed",
              left: 0,
              top: 64,
              bottom: 0,
              background: colorBgContainer,
              boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
            }}
          >
            {SidebarMenu}
          </Sider>
        )}

        {/* Sidebar Drawer for mobile */}
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={() => setSidebarDrawerVisible(false)}
          open={sidebarDrawerVisible}
          bodyStyle={{ padding: 0 }}
          width="100%"
        >
          {SidebarMenu}
        </Drawer>

        {/* Top menu Drawer for mobile */}
        <Drawer
          title="Navigation"
          placement="top"
          closable={true}
          onClose={() => setTopMenuDrawerVisible(false)}
          open={topMenuDrawerVisible}
          bodyStyle={{ padding: 0 }}
          height="auto"
        >
          {TopMenuItems}
        </Drawer>

        {/* Main Content */}
        <Layout
          style={{
            marginLeft: !hideSidebar && !isMobile ? 220 : 0,
            transition: "margin-left 0.2s",
          }}
        >
          <Content style={{ padding: "24px", minHeight: "calc(100vh - 64px)" }}>
            <Breadcrumb
              style={{ margin: "16px 0" }}
              items={[{ title: "Dashboard" }, { title: "Section" }]}
            />
            <div
              style={{
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/cloths" element={<Cloths />} />
                <Route path="/cloths/men" element={<Men />} />
                <Route path="/cloths/women" element={<Women />} />
                <Route path="/cloths/kids" element={<Kids />} />

                <Route path="/electronic" element={<Electronic />} />
                <Route path="/electronic/mobiles" element={<Mobiles />} />
                <Route path="/electronic/laptops" element={<Laptops />} />
                <Route path="/electronic/tablets" element={<Tablets />} />

                <Route path="/household" element={<HouseHold />} />
                <Route path="/household/furniture" element={<Furniture />} />
                <Route path="/household/kitchen" element={<Kitchen />} />
                <Route path="/household/decor" element={<Decor />} />

                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
