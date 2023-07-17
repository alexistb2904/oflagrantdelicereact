import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { useTheme } from "../../utils/hooks";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 10vh;
  margin-bottom: 5vh;
  font-family: "Poppins", sans-serif;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2vh;
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const FooterA = styled.a`
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  color: grey;
  transition: 0.5s;
  margin-bottom: 1vh;
  &:hover {
    color: darkgray;
  }
`;

const FooterTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: ${({ theme }) => (theme === "light" ? "black" : "#fffcf1")};
`;

const FooterP = styled.p`
  margin: 0;
  color: grey;
`;

const FooterEnd = styled.p`
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: grey;
  margin-top: 2vh;
`;

function Footer() {
  const { theme } = useTheme();
  return (
    <>
      <FooterContainer>
        <Logo>
          <a href={"/"}>
            <img
              src={logo}
              alt={"Logo O' Flagrant Délice"}
              width="64px"
              height="64px"
            />
          </a>
        </Logo>
        <FooterSocial>
          <FooterTitle theme={theme}>Nos Réseaux</FooterTitle>
          <FooterA
            theme={theme}
            href={"https://www.facebook.com/profile.php?id=100072043366694"}
          >
            <i className="ai-facebook-fill"></i> Facebook
          </FooterA>
          <FooterA theme={theme} href={"https://www.instagram.com/ofdpizza/"}>
            <i className="ai-instagram-fill"></i> Instagram
          </FooterA>
          <FooterA theme={theme} href={""}>
            <i className="ai-snapchat-fill"></i> Snapchat
          </FooterA>
        </FooterSocial>
        <FooterStyle id="contact">
          <FooterTitle theme={theme} className="title">
            Adresse et Contact
          </FooterTitle>
          <FooterP theme={theme}>
            12 Av. des Sévines, 92230 Gennevilliers
          </FooterP>
          <FooterP theme={theme}>01 47 98 76 54</FooterP>
        </FooterStyle>
        <FooterStyle>
          <FooterTitle theme={theme} className="title">
            Horaires d'ouvertures
          </FooterTitle>
          <FooterP theme={theme}>
            Tout les jours : 11h30 - 14h30 / 18h30 - 23h
          </FooterP>
          <FooterP theme={theme}>Sauf vendredi : 18h30 - 23h</FooterP>
        </FooterStyle>
      </FooterContainer>
      <FooterEnd theme={theme}>
        Site créé à des fins d'entraînement par{" "}
        <a href={"https://github.com/alexistb2904"}>alexistb2904</a>. Ce site
        n'a été en aucun cas approuvé par O' Flagrant Délice. Les informations
        contenues sur ce site peuvent être fausses. Merci de vous rendre sur le
        vrai site de
        <a
          href={
            "https://o-flagrant-delice.business.site/?utm_source=gmb&utm_medium=referral"
          }
        >
          O' Flagrant Délice
        </a>
        afin d'obtenir des informations vérifiées. La source des images et
        illustrations utilisées peut être trouvée <a href={"/"}>ici</a>.
      </FooterEnd>
    </>
  );
}

export default Footer;
