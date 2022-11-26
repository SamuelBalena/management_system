import { Button } from "../../components/Button/styles";
import { Title } from "../../components/Text/Title/styles";
import { Container, Form } from "./styles";

export const LoginForm = (): JSX.Element => (
  <Container>
    <Form>
      <Title weight={"bold"}>Login</Title>
      <fieldset>
        <input type="text" placeholder="Email" />
      </fieldset>
      <fieldset>
        <input type="password" placeholder="Senha" />
      </fieldset>
      <Button size={"ex"} colors={"green"}>
        Login
      </Button>
    </Form>
  </Container>
);
