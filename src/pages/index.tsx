import DashboardLayout from "@/layouts/dashboard/dashboard-layout";
import { ConfigProvider } from "antd";
import Head from "next/head";

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF7225",
        },
      }}
    >
      <Head>
        <title>WG - Admin</title>
        <meta name="description" content="Wegenawi Gubgnet Web Admin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>A</DashboardLayout>
    </ConfigProvider>
  );
}
