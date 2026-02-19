import * as _ from "./style";
import { Button } from "../../atoms/button";

interface SubtitleProps {
  title: string;
  description: string;
  onSubmit?: () => void;
}

const Subtitle = ({ title, description, onSubmit }: SubtitleProps) => {
  return (
    <_.Container>
      <div>
        <_.Title>{title}</_.Title>
        <_.Description>{description}</_.Description>
      </div>

      {onSubmit && (
        <Button onClick={onSubmit} isPrimary>
          Submit
        </Button>
      )}
    </_.Container>
  );
};

export default Subtitle;
