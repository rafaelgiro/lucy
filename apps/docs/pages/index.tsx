import { PsychedelicBox } from "@lucyds/ui";
import { Eye } from "@lucyds/svg";
import { TestPage } from "./styles";

export default function Docs() {
  return (
    <TestPage>
      <PsychedelicBox id="first-eye">
        <Eye />
      </PsychedelicBox>
      <PsychedelicBox id="second-eye">
        <Eye />
      </PsychedelicBox>
      <PsychedelicBox id="third-eye">
        <Eye />
      </PsychedelicBox>
    </TestPage>
  );
}
