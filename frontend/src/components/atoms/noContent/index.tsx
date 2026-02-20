import * as _ from "./style";
import { PiEmptyThin } from "react-icons/pi";

const NoContent = () => {
  return (
    <_.NoContentContainer>
      <PiEmptyThin />
      <p>No content to display</p>
    </_.NoContentContainer>
  );
};

export default NoContent;
