
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title,body} = post;
    return (
        <div >
            <div className="bg-slate-800 rounded-lg text-white py-4 h-full p-3 text-center ">
            <h1 className="text-2xl  font-bold text-cyan-200 ">Post id : {id} </h1>
            <h1 className="text-lg py-6 font-semibold uppercase "> {title.split('',22) } </h1>
            <p className="text-justify ">{body} </p>
            <div className=' pt-8' >
            <Link to={`/post/${id}`} className=' border rounded-lg px-3 py-2 hover:border-rose-400 hover:text-rose-300 ' > Show Details  </Link>
            </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    post:PropTypes.object
};

export default Post;