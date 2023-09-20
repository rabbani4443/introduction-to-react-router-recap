import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error)
    const navigate = useNavigate()
    const handelBackButton =()=>{
        navigate('/')
    }
    return (
        <div>
            <div className=" py-40 text-center m-auto">
                <h1 className="text-xl  font-bold my-auto text-center "> Oops! </h1>

                <h3 className="text-3xl py-5 font-bold my-auto text-center ">
                <p>{error.statusText || error.message}</p>
                </h3>
                <h3 className="text-xl font-bold my-auto text-center ">
                <p>{error.status || error.status}</p>
                </h3>
                <h3 className="py-5 font-bold my-auto text-center ">
                <p>{error.data || error.data}</p>
                </h3>
                <button onClick={handelBackButton} className='border rounded-lg px-8 font-bold py-2 hover:border-rose-400 hover:text-rose-300'> Back to Home </button>
            </div>
        </div>
    );
};

export default ErrorPage ;