import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { Link as ScrollLink } from "react-scroll";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Name12 = "< Kaif Ali />";

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/"></Link>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "#0EF6CC",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span> Kaif Ali</Span>
        </a>
      </Div1>
      <Div2>
        <li>
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={100}
          >
            <NavLink>About Me</NavLink>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            //activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={200}
            offset={50}
          >
            <NavLink>Projects</NavLink>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            activeClass="active"
            to="tech"
            spy={true}
            smooth={true}
            duration={100}
          >
            <NavLink>Technologies</NavLink>
          </ScrollLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/KaifAli27">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/kaif-ali-444815233/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
