import * as _ from "./style";
import { Content } from "../../global/styles";

//components
import Subtitle from "../../components/molecules/subtitle";
import { Input } from "../../components/atoms/input";
import { Textarea } from "../../components/atoms/textarea";
import FileUpload from "../../components/molecules/inputFile";

const HomePage = () => {
  return (
    <Content>
      <_.HomeContainer>
        <Subtitle
          title="New Send"
          description="Here you can send emails to specific users or import an existing database."
          onSubmit={() => {}}
        />

        <_.DataContainer>
          <_.Form>
            <_.FormField>
              <_.Label>Subject</_.Label>
              <Input type="text" placeholder="Insert the subject" />
            </_.FormField>

            <_.FormField>
              <_.Label>Content</_.Label>
              <Textarea placeholder="Insert the content" />
            </_.FormField>

            <_.FormField>
              <_.Label>Recipients</_.Label>
              <FileUpload
                onFileSelect={(file) => {
                  console.log(file);
                }}
              />
            </_.FormField>
          </_.Form>

          <_.UsersContent>Dados dos cliente carregados pelo csv</_.UsersContent>
        </_.DataContainer>
      </_.HomeContainer>
    </Content>
  );
};

export default HomePage;
