import React, { useContext, useEffect } from "react";
import Home from "../components/home/Home";
import Layout from "../components/layouts/Layout";
import { FirebaseContext } from "../firebase";
import Router from "next/router";

const Index = () => {
  const { firebase, usuario } = useContext(FirebaseContext);

  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Index;
