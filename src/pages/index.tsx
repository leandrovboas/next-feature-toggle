import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import NewHeader from "../components/NewHeader";
import { HomeContainer } from "../styles/HomeContainer";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Header />
      <NewHeader />
    </HomeContainer>
  );
};

export default Home;
