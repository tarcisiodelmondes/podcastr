export default function Home(props) {
  console.log(props);
  return <h1>Hello world</h1>;
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3333/episodes');
  const data = await res.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}