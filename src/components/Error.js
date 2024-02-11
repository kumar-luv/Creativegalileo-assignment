import { Link, useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div className="items-center justify-center w-full h-[600px]">
            <div className="items-center justify-center w-full h-[600px] flex flex-col">
            <h1>Oops! Go back <Link TO={"/"} className="font-bold">HOME</Link>.</h1>
            <p>{err.data}</p>
            <p3>{err.status + " : "}</p3>
            <p3>{err.statusText}</p3>
            </div>
        </div>
    );
};

export default Error;