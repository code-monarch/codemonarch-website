// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import styles from "../styles/Blog.module.css";
// import Skeleton from "react-loading-skeleton";

// TODO:
// FIX HEROKU BLOG APPLICATION ERROR
// CREATE LOADING SKELETON
//  MAKE BLOG POST CARDS
//  DISPLAY READ TIME
//  DISPLAY DATE

// const { BLOG_URL, CONTENT_API_KEY } = process.env;

// async function getPosts() {
// curl ""
// 	const res = await fetch(
// 		`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,featured_image`
// 	).then((res) => res.json());

// 	const posts = res.posts;

// console.log(posts)

// 	return posts;
// }

// export const getStaticProps = async ({ params }) => {
// 	const posts = await getPosts();
// 	return {
// 		revalidate: 50,
// 		props: { posts },
// 	};
// };

// const blog = ({ posts }) => {
// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.header}>
// 							<div className={styles.img}>
// 						<img
// 							className={styles.img}
// 							src='/codeMonarch.jpg'
// 							alt='Code Monarch logo'
// 						/>
// 					</div>
// 				<p>Thoughts, ideas and stories.</p>
// 			</div>
// 			<div className={styles.posts}>
// 				<ul>
// 					{posts.map((post, index) => {
// 						return (
// 							<li className={styles.postitem} key={post.slug}>
// 								<img src={post.featured_image} alt={`${post.slug} img`} />
// 								<Link href='/post/[slug]' as={`/post/${post.slug}`}>
// 									<a>{post.title}</a>
// 								</Link>
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };

// export default blog;

import React from "react";
// import styles from "../styles/Blog.module.css";

const blog = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.h1}> Blog coming soon... </h1>{" "}
		</div>
	);
};

export default blog;
