import GithubImg from "../img/github.png";
import LinkedinImg from "../img/linkedin.png";

import { FooterContainer, FooterUL, FooterImg } from "../styles/Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterUL>
        <li>Esther van der Vloet</li>
        <li>esthervandervloet@gmail.com</li>
        <li>
          <a href="tel: 0651596483">06-51596483</a>
        </li>
      </FooterUL>
      <FooterUL>
        <li>
          <a
            href="https://github.com/EsthervdV1"
            target="_blank"
            rel="noreferrer"
          >
            <FooterImg src={GithubImg} alt="" />
          </a>
        </li>
      </FooterUL>
      <FooterUL>
        <li>
          <a
            href="https://www.linkedin.com/in/esther-van-der-vloet/"
            target="_blank"
            rel="noreferrer"
          >
            <FooterImg src={LinkedinImg} alt="" />
          </a>
        </li>
      </FooterUL>
    </FooterContainer>
  );
};

export default Footer;
