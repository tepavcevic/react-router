import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <>
            <h1>Sorry, error happened!</h1>
            <Link to="/">Go to home page.</Link>
        </>
    )
}