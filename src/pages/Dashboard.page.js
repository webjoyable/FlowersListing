import React from "react";
import Container from "../components/layout/Container.component";
import UserHeader from "../components/user-header/UserHeader.component";
import DataListing from "../components/data-listing/DataListing.component";

const Dashboard = () => {
  return (
    <Container width="100%" height="100%">
      <UserHeader />
      <h1>Dashboard</h1>
      <DataListing />
    </Container>
  );
};

export default Dashboard;
