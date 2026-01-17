import { AccentFirst, AccentSecond, Header, Link, List } from "./AppBar.styled";

export default function AppBar() {
  return (
    <Header>
      <Link to="/">
        <AccentFirst>Herous</AccentFirst>
        <AccentSecond>API</AccentSecond>
      </Link>

      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Herous</Link>
        </li>
        <li>
          <Link to="/new">New Hero</Link>
        </li>
      </List>
    </Header>
  );
}
