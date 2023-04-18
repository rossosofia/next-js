// initiate a random function for a declared api

export default function RandomDog({ imgUrl }) {
  return (
    <>
      <h1>Random Dog</h1>
      <img src={imgUrl} alt="Random Dog" />
    </>
  );
}

// runs in the server, asks for data/apo/database and the page is populated with the data. It's generated on the server. We usually generate the html on the client.
export async function getServerSideProps() {
  const api = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      imgUrl: data.message,
    },
  };
}
