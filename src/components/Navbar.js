
import { Link } from "react-router-dom";
import { router } from "../router";

import {
    NavMenuStyle,
    UlMenuStyle,
    LiMenuStyle,
} from "../styles/navbar.component.style";

export default function Navbar() {
    return (
        <NavMenuStyle>
            <div>
                <UlMenuStyle>
                    {router
                        .filter((route) => route.isVisible)
                        .map((route) => {
                            return (
                                <LiMenuStyle>
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to={route.path}
                                    >
                                        {<route.icon />}
                                    </Link>
                                </LiMenuStyle>
                            );
                        })}
                </UlMenuStyle>
            </div>
        </NavMenuStyle>
    );
}