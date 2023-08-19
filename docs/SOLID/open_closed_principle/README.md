# Open-closed principle (OCP)

## What is this?

- This principle say: 
  
`The entities need to be open to extension, but closed to changes`

___

## Why?

- With that, we extends the behavior using heritage, interfaces and compositions, with more abstraction and less coupling


## Examples (React)

### Bad example

```jsx
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
```

### Good example

```jsx
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
```