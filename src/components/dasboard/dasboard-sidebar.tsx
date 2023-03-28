import { Menu, Layout } from "antd";

import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

import { RxDashboard } from "react-icons/rx";
import { FaHandHoldingUsd, FaHandsHelping } from "react-icons/fa";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";

import { useRouter } from "next/router";
import Image from "next/image";

import WGLogo from "../../../public/static/images/wg-logo.png";

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
    getItem("Dashboard", "/", <RxDashboard size={18} />),
    getItem("Beneficiary", "beneficiary", <FaHandHoldingUsd size={18} />),
    getItem(
      "Volunteers",
      "volunteer",
      <MdOutlineVolunteerActivism size={18} />
    ),
    getItem("Events", "warehouses", <RiCalendarEventLine size={18} />),
    getItem("Stories", "shelves", <MenuOutlined size={18} />),
    getItem("Donors", "goods-receiving-notes", <FaHandsHelping size={18} />),
    getItem("Contacts", "orders", <MdOutlinePermContactCalendar size={18} />),
    getItem(
      "Users Management",
      "self-pickup-orders",
      <HiOutlineUsers size={18} />
    ),
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
        <Image src={WGLogo} alt="WG-Logo" height={collapsed ? 40 : 100} />
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
