import Head from "next/head";
import Brands from "../components/Brands";
import Choices from "../components/Choices";
import FindingInfo from "../components/FindingInfo";
import IncreaseTraffic from "../components/IncreaseTraffic";
import LandingPage from "../components/LandingPage";
import Nav from "../components/Nav";
import Newsletter from "../components/Newsletter";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 bg-gradient  ">
      <Head>
        <title>BlueSky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <LandingPage />
      <Brands />
      <Choices />
      <IncreaseTraffic />
      <Projects />
      <FindingInfo />
      <Newsletter />
      <Footer />
    </div>
  );
}
