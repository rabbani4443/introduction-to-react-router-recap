
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {

    const navigate = useNavigate();

    const handelBackButton=()=>{
        // navigate(-1)
        // navigate('/')
        navigate('/posts')
    }

    const postDetails = useLoaderData();
    console.log(postDetails);

    return (
        <div className="my-8">
            <div className="bg-slate-600 rounded-lg text-white  h-full p-10 text-center w-3/4 mx-auto">
            <h1 className="text-4xl  font-bold text-cyan-200 ">Post id : {postDetails.id} </h1>
            <h1 className="text-2xl py-6 font-bold uppercase "> {postDetails.title } </h1>
            <p className="text-xl text-justify ">{postDetails.body} </p>
            <div className=' pt-5 ' >
                <button onClick={handelBackButton} className='border rounded-lg px-8 font-bold py-2 hover:border-rose-400 hover:text-rose-300'> Back </button>
            </div>
            </div>
        </div>
    );
};

export default PostDetails;