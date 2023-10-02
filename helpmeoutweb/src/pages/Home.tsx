import Features from '@/components/Features';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Layout from '@/components/Layout';

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Features />
        <HowItWorks />
      </Layout>
    </>
  );
};

export default Home;
