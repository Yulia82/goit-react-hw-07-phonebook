import { Wrapper } from "../Wrapper/Wrapper.styles";
import Form from "../Form";
import SectionTitle from "../SectionTitle";
import ContactsList from "../Contacts";
import Filter from "../Filter";

function App() {
  return (
    <Wrapper>
      <SectionTitle title="Phonebook">
        <Form />
      </SectionTitle>

      <SectionTitle title="Contacts">
        <Filter />
        <ContactsList />
      </SectionTitle>
    </Wrapper>
  );
}

export default App;
