/* eslint-disable */

const Header = ({ children }) => (
  <header>
    <Logo />
    <Actions>
      {/* Now we use composition to modify by outside the content of this component, instead changing direct in this component */}
      {children}
    </Actions>
  </header>
)

const HomePage = () => (
  <>
    <Header>
      <Link to="/dashboard">Go to dashboard</Link>
    </Header>
    <OtherHomeStuff />
  </>
)

const DashboardPage = () => (
  <>
    <Header>
      <Link to="/events/new">Create event</Link>
    </Header>
    <OtherDashboardStuff />
  </>
)
