import { Menu, Layout } from "antd";

import React, { useEffect, useState } from "react";
import {
  ContactsOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  UserOutlined,
  ApartmentOutlined,
  UsergroupAddOutlined,
  GroupOutlined,
  MenuOutlined,
  TagsOutlined,
  OrderedListOutlined,
  IdcardOutlined,
  ProfileOutlined,
  UserAddOutlined,
  TableOutlined,
  PullRequestOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const { Sider } = Layout;

type Props = {
  collapsed: boolean;
};

type GetItemProps = {
  label?: string;
  key: string;
  icon?: React.ReactNode;
  children?: Object[];
  type?: string;
};

const DashboardSidebar = ({ collapsed }: Props) => {
  /**
   * states and hooks
   */
  let router = useRouter();
  const [currentMenuItem, setCurrentMenuItem] = useState<string | null>();

  /**
   * effects
   */
  useEffect(() => {
    localStorage.setItem("ashewaMenuKey", router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    if (localStorage.getItem("ashewaMenuKey") === "/") {
      setCurrentMenuItem("/");
    } else {
      setCurrentMenuItem(localStorage.getItem("ashewaMenuKey"));
    }
  }, [router.pathname]);

  /**
   * methods
   */
  const getItem = (
    label: string,
    key: string,
    icon: React.ReactNode,
    children?: Object[]
  ): GetItemProps => {
    return {
      label,
      key,
      icon,
      children,
    };
  };

  /**
   * destructured variables
   */
  const items = [
    getItem("Dashboard", "/", <DashboardOutlined />),
    getItem("Requisitions", "requisitions", <PullRequestOutlined />),
    getItem("Warehouses", "warehouses", <GroupOutlined />),
    getItem("Shelves", "shelves", <MenuOutlined />),
    getItem("Goods Receiving Note", "goods-receiving-notes", <TableOutlined />),
    getItem("Orders", "orders", <DatabaseOutlined />),
    getItem("Self Pickup Orders", "self-pickup-orders", <ContactsOutlined />),
    getItem("Dispatch Note", "dispatch-notes", <TagsOutlined />),
    getItem("Vendors", "vendors", <UserOutlined />),
    getItem("Products", "products", <ApartmentOutlined />),
    getItem("Customers", "customers", <UsergroupAddOutlined />),
    getItem("Reports", "reports", <OrderedListOutlined />, [
      getItem("Bin Card", "reports/bin-card", <ProfileOutlined />),
      getItem("Stock Card", "reports/stock-card", <IdcardOutlined />),
    ]),
    getItem("Users", "users", <UserAddOutlined />),
  ];

  return (
    <Sider
      className="!overflow-auto !top-0 !left-0 !bottom-0 !fixed h-screen !bg-white"
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={220}
    >
      <div
        className={`${
          collapsed ? "mt-8" : "mt-0"
        } bg-white p-2.5 mb-5 logo flex justify-center transition-all`}
      >
        {/* Logo */}
        {/* <LazyLoadImage
          src={ashewaLogo}
          placeholderSrc={ashewaLogoPlaceholder}
          width={"100%"}
        /> */}
      </div>

      <Menu
        className="font-poppins-regular"
        theme="light"
        mode="inline"
        selectedKeys={[currentMenuItem!]}
        items={items}
        onClick={({ key }) => {
          // navigate(`${key}`, { replace: true });
          setCurrentMenuItem(key);
        }}
      />
    </Sider>
  );
};

export default DashboardSidebar;
