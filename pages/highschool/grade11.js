import Head from "next/head";
import Nav from "../../components/general/Nav";
import ServicesGrate from "../../components/general/ServicesGrade";
import Footer from "../../components/general/Footer";

const HighSchool2 = () => {
  return (
    <section>
      <Head>
        <title>Grade 11 | Online Lessons App</title>
      </Head>
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <ServicesGrate
          img="https://res.cloudinary.com/dirbnpgsp/image/upload/v1660683558/casual-life-3d-young-man-in-orange-headphones-sitting-at-the-computer_reupky.png"
          title="المرحلة الثانوية Grade 11"
          subtitle="يوجد جميع كتب الوزارة و الكتب الخارجية و الفديوهات التعليمية و الفديوهات التعليمية ذات مصدر مفتوح الي هذه المرحلة"
          urlApi="highSchool/grade11/grade11List"
        />
      </div>
      <Footer />
    </section>
  );
};

export default HighSchool2;