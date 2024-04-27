import React from "react";
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <div>
            <header>
                <Link to="/jobboard">
                <h1>Job Application Tracker</h1>
                </Link>
                <Link to="/create">
                    add a new job
                </Link>
            </header>
        </div>
    )
}

export default Header