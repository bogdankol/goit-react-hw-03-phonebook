import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import Phonebook from "./components/Phonebook";
import { Component } from "react";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  render() {
    const {contacts, filter} = this.state;
    return (
      <Container>

          <Phonebook contacts={contacts} filter={filter}/>
      </Container>
    );
  }
}

export default App;
