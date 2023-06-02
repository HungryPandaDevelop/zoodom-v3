
import MainSection from 'pages/main-page/MainSection';
import HomeNurseries from 'pages/main-page/HomeNurseries';
import FeedbackHome from 'pages/main-page/FeedbackHome';
import HomePromo from 'pages/main-page/HomePromo';

import { Helmet } from "react-helmet";

const MainPage = () => {



  return (
    <>
      <Helmet>
        <title>Федеральный Российский портал о домашних животных Zoonika</title>
        <meta name="description" content="Сайт о животных Zoonika.com создан для владельцев питомников, ветеринарных клиник и любителей кошек и собак. Здесь можно купить или получить в дар кошку или собаку любой породы." />
        <meta name="keywords" content="сайт портал ресурс о животных кошках собаках породы объявления продажа питомники" />

        <meta property="og:title" content="Федеральный Российский портал о домашних животных Zoonika" />
        <meta property="og:description" content="Сайт о животных Zoonika.com создан для владельцев питомников, ветеринарных клиник и любителей кошек и собак. Здесь можно купить или получить в дар кошку или собаку любой породы." />

      </Helmet>
      <MainSection />
      <HomeNurseries />
      <HomePromo
      />
      <div className="stub-footer"></div>
    </>
  );
};

export default MainPage;