"use lint"

import Link from "next/link";


export async function getStaticPaths() {
    const res = await fetch('http://localhost:5000/posts');
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    console.log(paths);
    return { paths, fallback: false };
}


const DetailsPage = async ({params}) => {

    console.log(params.id);

    const res = await fetch(`http://localhost:5000/posts/${params.id}`) ;
    const post = await res.json();
    console.log(post);




    return (
        <div>
            <h2>DetailsPage : {post.id} </h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.description}</p>
                            <button className="btn btn-primary">Total Like : {post.likeCount}</button>
                            <div className="card-actions justify-end">
                                <Link href={`/posts`}><button className="btn btn-primary">Back</button></Link>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default DetailsPage;