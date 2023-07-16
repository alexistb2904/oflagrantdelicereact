import styled from "styled-components";
import { H1Styled } from "../Menu";

const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledA = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 0;
  color: grey;
  text-decoration: none;
  transition: 0.5s;
  &:hover {
    color: darkgray;
  }
`;

const StyledIframe = styled.iframe`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  width: 80vw;
  height: 50vh;
  border: none;
  border-radius: 2vw;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
function Location() {
  return (
    <SectionStyled id="location">
      <div>
        <div>
          <div>
            <H1Styled>Où nous trouver ?</H1Styled>
            <StyledA href="https://www.google.com/maps?ll=48.926712,2.300325&z=14&t=m&hl=fr&gl=FR&mapclient=embed&cid=16428245358628184027">
              <p>12 Av. des Sévines, 92230 Gennevilliers</p>
            </StyledA>
          </div>
          <div>
            <StyledIframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4376.9283263516845!2d2.295229914635132!3d48.92689517620054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fa60ae1037d%3A0xe3fcda1cf3fe1fdb!2sO&#39;%20Flagrant%20D%C3%A9lice!5e0!3m2!1sfr!2sfr!4v1688570197327!5m2!1sfr!2sfr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></StyledIframe>
          </div>
        </div>
      </div>
    </SectionStyled>
  );
}

export default Location;
