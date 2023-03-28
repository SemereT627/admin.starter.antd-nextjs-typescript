import { theme, Layout } from "antd";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const { Content } = Layout;

const DashboardWrapper = ({ children }: Props) => {
  return (
    <Content
      style={{
        margin: "1px",
        padding: 24,
        minHeight: 400,
      }}
    >
      {children}
    </Content>
  );
};

export default DashboardWrapper;
