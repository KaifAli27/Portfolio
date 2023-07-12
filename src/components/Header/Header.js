import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/"></Link>
        <a style={{ display: "flex", alignItems: "center", color: "#0EF6CC" }}>
          <DiCssdeck size="3rem" />
          <span>Kaif's Portfolio</span>
        </a>
      </Div1>
    </Container>
  </div>
);

export default Header;
