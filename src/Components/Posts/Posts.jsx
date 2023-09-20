import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()

    return (
        <div>
            <div className="text-center py-8">
            <h1 className="text-5xl font-bold">Total Posts : {posts.length} </h1>
            </div>

            <div className="grid md:grid-cols-4 gap-4 flex-grow" >
            {
                posts.map(post=> <Post key={post.id} post={post} ></Post> ) 
            }
                </div>
            </div>
    );
};

export default Posts;