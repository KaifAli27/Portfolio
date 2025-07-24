import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>Developer · CarletonU · Ottawa</SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1_IeWOmfk2x-c1udwxJ0YJ_nWxDSzoVW6/view?usp=sharing")
        }
      >
        View Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
