import { PsychedelicBox, NoiseOverlay } from "@lucyds/ui";
import { Eye, Hand, Triangle } from "@lucyds/svg";
import { TestPage } from "./styles";
import { css, Global } from "@emotion/react";

export default function Docs() {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <TestPage>
        <div className="container">
          <PsychedelicBox id="first-eye" className="triangle">
            <Triangle />
          </PsychedelicBox>
          <PsychedelicBox id="first-eye" className="hand">
            <Hand />
          </PsychedelicBox>
          <PsychedelicBox id="first-eye" className="eye">
            <Eye />
          </PsychedelicBox>
        </div>
        <NoiseOverlay />
      </TestPage>
    </>
  );
}
