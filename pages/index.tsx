import DefaultLayout from '@/layouts/default';
import UrlInput from '@/components/InputPath';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        <div className='inline-block max-w-xl text-center justify-center'>
          {/* <span className={title()}>Make&nbsp;</span>
          <span className={title({color: 'violet'})}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>websites regardless of your design experience.</span>
          <div className={subtitle({class: 'mt-4'})}>Beautiful, fast and modern React UI library.</div> */}
        </div>

        <div className='flex gap-3'>
          <UrlInput />
        </div>
      </section>
    </DefaultLayout>
  );
}
