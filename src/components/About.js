import { AboutHeader, AboutParagraph, AboutButton} from "../styles/About.styles";

const About = () => {
  return (
    <>
      <AboutHeader> Over mij</AboutHeader>
      <AboutParagraph>
        Na jaren van diverse banen kreeg ik begin 2021 de mogelijkheid om mijn
        carriere te heroverwegen. Met behulp van een coach heb ik onderzocht
        welk vakgebied het beste bij mij zou passen.
      </AboutParagraph>
      <AboutParagraph>
        Door middel van gesprekken en testen is hier ICT uitgekomen en dan met
        name de developers kant van ICT. Maken en technisch bezig zijn is iets
        wat heel goed bij mij past. In het verleden heb ik een webshop gehad in
        huisdierartikelen, en hiermee had ik al een eerste kennismaking met
        webdevelopment. Omdat ik het bouwen van de webshop leuker vond dat het
        contact met klanten heb ik de webshop verkocht.
      </AboutParagraph>
      <AboutParagraph>
        Een uitgebreid profiel wat betreft werkervaring kan je vinden op mijn
        linkedin profiel. Echter vind ik deze omscholing bij uitstek het moment
        om te kijken naar het "nu" en niet naar het verleden.
      </AboutParagraph>

      <AboutHeader>Mijn portfolio</AboutHeader>
      <AboutParagraph>
        Deze website dient als mijn portfolio. Elke website die ik gebouwd heb,
        heeft een "Over" pagina. Hierin beschrijf ik waarom ik de website heb
        gemaakt en waarom ik bepaalde keuzes heb gemaakt.
      </AboutParagraph>
      <AboutParagraph>
        Voor deze portfolio website heb ik ervoor gekozen om gebruik te maken
        van Styled Components. Dit is een bibliotheek van React waarmee je
        makkelijk en snel herbruikbare styling componenten kan maken. Voor deze
        portfolio website is het niet de allerbeste keuze omdat ik niet veel
        herbruikbare componenten heb, maar ik vond het vooral een goede oefening
        om kennis te maken met de styled components.
      </AboutParagraph>
      <AboutParagraph>
        Een andere keuze die ik heb gemaakt is om het overzicht van projecten in
        hardcode te doen. Hoewel React bij uitstek geschikt is om componenten te
        hergebruiken, vind ik het niet handig omdat nu te doen. Het is nu
        makkelijker om de code die een project laat zien te copy/pasten. In de
        verschillende portfolio websites laat ik al zien dat ik prima in staat
        bent om componenten te hergebruiken.
      </AboutParagraph>

      <a href="https://github.com/EsthervdV1/Portfolio" alt="" target="_blank" rel="noreferrer">
          <AboutButton>Github</AboutButton>
        </a>
    </>
  );
};

export default About;
