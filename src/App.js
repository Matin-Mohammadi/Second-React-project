import { Link, Outlet } from "react-router-dom"

const App = () => {
  return (
    <div className="App">

      <h1>My courses</h1>

      <nav className="title w-60 d-flex justify-content-around align-items-center"  style={{borderBottom: "2px solid gray", padding:"2rem",margin:"3rme"}}>
        <Link to="/about" style={{textDecoration:"none",paddingBottom:"1rem"}} className="h3 text-danger child">About</Link>
        {" "}
        <Link to="/books" style={{textDecoration:"none",paddingBottom:"1rem"}} className="h3 text-danger child">Cources</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default App