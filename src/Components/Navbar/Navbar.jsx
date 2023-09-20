import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { FiMenu } from 'react-icons/fi';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Navbar = () => {
    const[open, setOpen]=useState(false);
    const routes = [
        {id: 1, name: "Home", path: "/"},
        {id: 2, name: "Posts", path: "/posts"},
        {id: 3, name: "Products", path: "/products"},
        {id: 4, name: "Contact", path: "/contact"},
        {id: 5, name: "Profile", path: "/profile"}
    ];

    return (
        <div>
            <nav>
                    <div onClick={()=> setOpen(!open)} className="md:hidden text-3xl p-5 bg-slate-800 ">
                        {
                            open===true ? <AiOutlineCloseSquare></AiOutlineCloseSquare>:<FiMenu></FiMenu>
                        }     
                    </div>
                <ul className={`md:flex justify-center items-center py-5 duration-1000 bg-slate-800 p-5 absolute md:static rounded-lg
              ${open? 'left-0': '-left-60'}
              `} >
                {
                  routes.map(route => <NavLink key={route.id} route={route} ></NavLink> )
                }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;