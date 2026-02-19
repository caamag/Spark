import * as _ from "./style";
import { Content } from "../../global/styles";

//components
import Subtitle from "../../components/molecules/subtitle";
import { Input } from "../../components/atoms/input";
import { Textarea } from "../../components/atoms/textarea";

const HomePage = () => {
  return (
    <Content>
      <_.HomeContainer>
        <Subtitle
          title="New Send"
          description="Here you can send emails to specific users or import an existing database."
          onSubmit={() => {}}
        />

        <_.SubmitContainer>
          <_.ForomField>
            <_.Label>Subject</_.Label>
            <Input placeholder="Insert the subject" />
          </_.ForomField>

          <_.ForomField>
            <_.Label>Content</_.Label>
            <Textarea placeholder="Insert the content" />
          </_.ForomField>
        </_.SubmitContainer>
      </_.HomeContainer>
    </Content>
  );
};

export default HomePage;
