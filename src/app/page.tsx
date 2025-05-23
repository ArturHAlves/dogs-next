import Feed from "@/components/feed/feed";

export default async function Home() {
  const response = await fetch(
    "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0"
  );

  return (
    <section className="container mainContainer">
      <Feed />
    </section>
  );
}
