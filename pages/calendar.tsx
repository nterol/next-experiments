import React from "react";

import Head from "next/head";

import Layout from "@templates/layout";
import Timeline from "@organisms/timeline";
import Sidebar from "@organisms/sidebar";

function Calendar(): React.ReactNode {
  return (
    <Layout>
      <Head>
        <title>Stupid calendar</title>
      </Head>
      <section>
        <Timeline />
      </section>
      <section>
        <Sidebar />
      </section>
    </Layout>
  );
}

export default Calendar;
