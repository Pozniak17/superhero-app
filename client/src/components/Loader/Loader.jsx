import { SpinnerWrapper } from "./Loader.styled";
import { RingLoader } from "react-spinners";

export const Loader = () => {
  return (
    <SpinnerWrapper>
      <RingLoader color="#d74e36" size={80} />
    </SpinnerWrapper>
  );
};
