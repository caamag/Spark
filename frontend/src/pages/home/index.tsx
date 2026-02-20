import * as _ from "./style";
import { Content } from "../../global/styles";
import { useHome } from "./useHome";
import { isEven } from "../../utils/isEven";

//components
import Subtitle from "../../components/molecules/subtitle";
import { Input } from "../../components/atoms/input";
import { Textarea } from "../../components/atoms/textarea";
import FileUpload from "../../components/molecules/inputFile";
import { Select } from "../../components/atoms/select";
import NoContent from "../../components/atoms/noContent";
import Loading from "../../components/atoms/loading";

const HomePage = () => {
  const helper = useHome();

  return (
    <Content>
      <_.HomeContainer>
        <Subtitle
          title="New Send"
          description="Here you can send emails to specific users or import an existing database."
          onSubmit={helper.onSubmit}
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

            {helper.loading ? (
              <Loading />
            ) : (
              <_.FormField>
                <_.Label>Recipients</_.Label>
                <FileUpload
                  onFileSelect={(file) => helper.handleCsvUpload(file)}
                />
              </_.FormField>
            )}
          </_.Form>

          <_.UsersContent>
            <_.FormField>
              <_.Label>Choose a correct column</_.Label>
              <Select
                disabled={helper.loading || helper.csvData.length === 0}
                onChange={(e) => helper.handleSelectedColumn(e.target.value)}
              >
                <option value="">Select a column</option>
                {helper.csvColumns.map((col) => (
                  <option key={col} value={col}>
                    {col}
                  </option>
                ))}
              </Select>
            </_.FormField>
            <br />

            {helper.csvData.length === 0 ||
            !helper.selectedColumn ||
            helper.selectedColumn === "" ? (
              <NoContent />
            ) : (
              <_.EmailList>
                {helper.csvData.map((data, index) => (
                  <_.EmailItem key={index} isEmpty={isEven(index)}>
                    {data[helper.selectedColumn]}
                  </_.EmailItem>
                ))}
              </_.EmailList>
            )}
          </_.UsersContent>
        </_.DataContainer>
      </_.HomeContainer>
    </Content>
  );
};

export default HomePage;
