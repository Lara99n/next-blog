import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";

const primerPost = ({ data }) => {
  console.log({ data });
  return (
    <Layout>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>

      <Link href="/blog">
        <a>← Back to blog</a>
      </Link>
    </Layout>
  );
};

export default primerPost;

export async function getStaticPaths() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));

    return {
      paths,
      fallback: false, //genera un 404 en caso de q la solicitud falle.
    };
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    console.log(params);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
