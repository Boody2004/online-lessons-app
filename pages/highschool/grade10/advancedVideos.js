import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Head from "next/head";
import Nav from "../../../components/general/Nav";
import IntroService from "../../../components/general/IntroService";
import VideoPlayer from "../../../components/general/VideoPlayer";
import Footer from "../../../components/general/Footer";

const AdvancedVideo = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <section>
      <Head>
        <title>Grade 10 Advanced Video | Online Lessons App</title>
      </Head>
      {loading ? (
        <div
          className="flex justify-center mx-1"
          style={{
            marginTop: "50vh",
          }}
        >
          <ClimbingBoxLoader color={"#2F3AFD"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          <div className="container mx-auto px-5 sm:px-10">
            <Nav />
            <IntroService
              img="https://firebasestorage.googleapis.com/v0/b/onlinelessons-cab2d.appspot.com/o/Img%20Web%2FAdvanced%20Video.png?alt=media&token=ca613c07-8ffd-4789-90a0-2499aa656b0b"
              title="الفديوهات مفتوحة المصدر"
              subtitle="يوجد افضل الفديوهات مفتوحة المصدر الي هذه المرحلة"
            />
            <VideoPlayer urlApi="highSchool/grade10/advancedVideos" />
          </div>
          <Footer />
        </>
      )}
    </section>
  );
};

export default AdvancedVideo;
