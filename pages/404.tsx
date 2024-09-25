import BaseLayout from '@/components/layouts/BaseLayout';
import { Button } from '@/components/ui';

const Home = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col pt-[300px] gap-[20px] items-center justify-center">
        <p className="text-2xl">404: Page not found</p>
        <Button variant="secondary" href="/" size="lg" newTab={false}>
          Go back home
        </Button>
      </div>
    </BaseLayout>
  );
};

export default Home;
