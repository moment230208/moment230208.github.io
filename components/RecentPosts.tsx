import { getStaticProps } from '@/pages';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

const RecentPosts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section className={'mt-10'}>
      <h1 className={'text-5xl font-extrabold'}>Recent Blog Post</h1>
      <div className={'flex flex-col'}>
        {
          posts.slice(0, 5).map(post => (
            <Link
              key={post._id}
              className={'mt-5'}
              href={`/blog/${post._raw.flattenedPath}`}>
              <div className={'font-medium text-xl'}>{ post.title }</div>
              <div className={'font-light'}>{ post.description }</div>
            </Link>
          ))
        }
      </div>
    </section>
  );
};

export default RecentPosts;