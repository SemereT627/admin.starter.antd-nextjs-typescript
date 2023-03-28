import React, { useState } from "react";
import { Layout } from "antd";
import DashboardSidebar from "@/components/dasboard/dasboard-sidebar";
import DashboardNavbar from "@/components/dasboard/dashboard-navbar";
import DashboardWrapper from "@/components/dasboard/dashboard-wrapper";

const { Header, Sider, Content, Footer } = Layout;

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="!min-h-screen">
      <DashboardSidebar collapsed={collapsed} />
      <Layout
        className={`${
          collapsed ? "ml-16" : "ml-[220px]"
        } transition-all site-layout`}
      >
        <DashboardNavbar
          collapsed={collapsed}
          toggle={() => setCollapsed(!collapsed)}
        />
        <DashboardWrapper>{children}</DashboardWrapper>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
