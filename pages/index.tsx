import Container from '@/components/Container';
import RecentPosts from '@/components/RecentPosts';
import metadata from '@/data/metadata';
import { InferGetStaticPropsType } from 'next';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={'w-full relative h-[400px] overflow-hidden'}>
        <Image
          src={'/home.jpg'}
          alt="대표 이미지"
          width={828}
          height={552}
          className={'object-cover w-full rounded-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
        />
        <span className={'absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg'}>
          { metadata.title }
        </span>
      </div>
      <div className={'max-w-5xl w-full mx-auto my-20'}>
        <RecentPosts posts={posts} />
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => (
    Number(new Date(b.date)) - Number(new Date(a.date))
  ));

  return {
    props: {
      posts
    }
  };
};

export default Home;