import React from "react";

import { Layout, Dropdown, Space, Avatar } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

type NavbarProps = {
  collapsed: boolean;
  toggle: () => void;
};

const DashboardNavbar = ({ collapsed, toggle }: NavbarProps) => {
  /**
   * states
   */

  /**
   * selectors
   */

  /**
   * methods
   */

  /**
   * effects
   */

  /**
   * destructured values
   */
  //   const items = [
  //     {
  //       key: "logout",
  //       label: <div onClick={() => dispatch(logout())}>Logout</div>,
  //     },
  //   ];

  return (
    <>
      <Header className="w-full bg-white p-0 px-4 text-xl flex justify-between items-center">
        <div className="w-full pr-8 flex justify-between items-center">
          <div onClick={toggle}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <div className="flex flex-row justify-center items-center ">
            {/* <Dropdown menu={{ items }} trigger={["click"]}> */}
            <Space>
              <Avatar size={"default"} className="!bg-primary"></Avatar>
            </Space>
            {/* </Dropdown> */}
          </div>
        </div>
      </Header>
    </>
  );
};

export default DashboardNavbar;
