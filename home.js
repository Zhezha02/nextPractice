import React from "react";
// import Link from "next/link";
import { Button } from '@material-ui/core';

const Home = () => {
  return (
    <>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </>
  );
};

export default Home;
