import photosGet from '@/actions/photos-get';
import Feed from '@/components/feed/feed';

export default async function Home() {
  const { data } = await photosGet();

  return (
    <section className="container mainContainer">
      {data && <Feed photos={data} />}
      <h1 style={{ color: '#fff' }}>Eu te amo. Ainda vou casar contigo Ana</h1>
    </section>
  );
}
