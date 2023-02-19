import metadata from '@/data/metadata';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta
  };

  return (
    <>
      <div className={'w-full flex flex-col items-center'}>
        <Head>
          <title>{ meta.title }</title>
          <meta content={meta.description} name="description" />
          <meta property="og:site_name" content={meta.author} />
        </Head>
        <header className={'w-full max-w-5xl flex flex-row justify-between items-center h-[60px]'}>
          <div className={'flex flex-row items-center'}>
            <Link className='flex items-center' href={'/'}>
              <Image
                src={'/logo.jpg'}
                alt="로고"
                width={40}
                height={40}
                className={'object-cover'}
              />
              <span className={'mx-2 font-extrablog text-lg'}>
                { metadata.title }
              </span>
            </Link>
          </div>
          <Nav />
        </header>
        <main className={'w-full'}>{ props.children }</main>
      </div>
    </>
  );
};

export default Container;