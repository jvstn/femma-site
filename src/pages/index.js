import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ValueProp from "../components/ValueProp";
import ProductBenefits from "../components/ProductBenefits";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ValueProp />
    <ProductBenefits />
  </Layout>
);

export default IndexPage;
