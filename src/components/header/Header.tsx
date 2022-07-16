import { useState } from "react";
import Carrinho from "../carrinho/Carrinho";
import Sidebar from "../sideBar/Sidebar";
import { Base, DivLogo, H1, Nav, P, Ul } from "./style";

export default function Header() {
    const [navbar, setNavbar] = useState(false)
    const showSidebar = () => setNavbar(!navbar)
    
    return (
        <Base>
            <DivLogo>
                <H1>mks</H1> <P>Sistemas</P>
            </DivLogo>
            <DivLogo>
                <Nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
                    <Ul className='nav-menu-items' onClick={showSidebar}>
                    {navbar && <Sidebar />}
                <Carrinho />
                    </Ul>
                </Nav>
            </DivLogo>
        </Base>
    )
}