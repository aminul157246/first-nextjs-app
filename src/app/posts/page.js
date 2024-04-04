
import Link from "next/link";
import style from './Posts.module.css';

const PostPage = async () => {


    const res = await fetch("http://localhost:5000/posts",{ cache:"no-store"})
    const posts = await res.json()
    console.log(posts);

    return (
        <div>
            <h1 className="text-4xl text-center my-6">SEE ALL POST!!!!!!!!! </h1>
            <h2 className={style.header_text}>Total Posts : {posts.length}</h2>
            <div className="grid grid-cols-3">
            {
                posts.map(post => <div key={post.id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.description}</p>
                            <button className="btn btn-primary">Total Like : {post.likeCount}</button>
                            <div className="card-actions justify-end">
                                <Link href={`/posts/${post.id}`}><button className="btn btn-primary">See More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default PostPage;