import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

const index = ({ data }) => {
  return (
    <Layout titulo="blog">
      <Link href="blog/miBlog">
        <a>Mi Blog</a>
      </Link>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`blog/${id}`}>
              <a>
                {id} - {title}
              </a>
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
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
