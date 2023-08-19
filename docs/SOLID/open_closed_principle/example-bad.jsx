/* eslint-disable */

const Header = () => {
  const { pathname } = useRouter()

  return (
    <header>
      <Logo />
      <Actions>
        {/* Here we are letting the component take the responsability from the 
        consumer. If we need to define a new route, f.e., we need to change this 
        file and insert a new code line. So,  we have a bad coupling */}
        {pathname === '/dashboard' && <Link to="/events/new">Create event</Link>}
        {pathname === '/' && <Link to="/dashboard">Go to dashboard</Link>}
      </Actions>
    </header>
  )
}

const HomePage = () => (
  <>
    <Header />
    <OtherHomeStuff />
  </>
)

const DashboardPage = () => (
  <>
    <Header />
    <OtherDashboardStuff />
  </>
)
