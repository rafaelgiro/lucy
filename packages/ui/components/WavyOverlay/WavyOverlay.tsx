import { OverlayContainer, SecondOverlay } from "./styles";

export const WavyOverlay = () => {
  return (
    <>
      <OverlayContainer />
      <SecondOverlay />
      <SecondOverlay className="delay" />
      <SecondOverlay className="delay-2" />
    </>
  );
};
