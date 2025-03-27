import DefaultLayout from '@/layouts/default';
import UrlInput from '@/components/InputPath';
import Hero from '@/components/Hero';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero />
      <UrlInput />
    </DefaultLayout>
  );
}
