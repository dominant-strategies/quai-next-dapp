import BaseLayout from '@/components/layouts/BaseLayout';
import { Hero, Content } from '@/components/pages/home';

const Home = () => {
  return (
    <BaseLayout>
      <Hero />
      <Content />
    </BaseLayout>
  );
};

export default Home;
