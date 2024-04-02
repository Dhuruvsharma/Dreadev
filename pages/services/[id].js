import { expertise } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = expertise.find((post) => post.id === parseInt(id));
  if (!id || !post) {
    return <div>Error: Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Services" /> <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title={post.titlesm1} />

              {post.para1.map((text, i) => (
                <p className="desc-p" key={i}>
                  {text.text}
                </p>
              ))}
            </div>
          </div>
          <Banner />

          <div className="heading-title">
            <div className="desc">
              {post.para2.map((text, i) => (
                <p className="desc-p" key={i}>
                  {text.text}
                </p>
              ))}
              <TitleSm title={post.titlesm2} />
              <p className="desc-p">{post.lastpara}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
