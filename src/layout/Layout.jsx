import Container from "./components/Container";
import SideBar from "./components/SideBar";

function Layout({ children }) {
  return (
    <Container>
      <SideBar />
      {children}
    </Container>
  );
}

export default Layout;
