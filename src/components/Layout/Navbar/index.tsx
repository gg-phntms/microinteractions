import Link from "next/link";
import { Content, Links, NavbarRoot, Square } from "./styles";

const Navbar = () => {
  return (
    <NavbarRoot>
      <Content>
        <Link href="/">
          <Square />
        </Link>
        <Links>
          <li>
            <Link href="/about">About</Link>
          </li>
        </Links>
      </Content>
    </NavbarRoot>
  );
};

export default Navbar;
