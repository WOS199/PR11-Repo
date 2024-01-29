import Hero from "../../components/Hero/hero";
import FeatureItem from "../../components/featureItem/FeatureItem";
import Nav from "../../components/nav/Nav";
import Layout from "../../layout/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <section class="features">
          <h2 class="sr-only">Features</h2>
          <FeatureItem
            imgSrc="../../src/assets/img/icon-chat.png"
            imgAlt="Chat icon"
            title="You are our #1 priority"
            content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureItem
            imgSrc="../../src/assets/img/icon-money.png"
            imgAlt="Money icon"
            title="More savings means higher rates"
            content="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureItem
            imgSrc="../../src/assets/img/icon-security.png"
            imgAlt="Security icon"
            title="Security you can trust"
            content="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </Layout>
    </>
  );
}

export default Home;
