import { NavLink, Outlet ,useSearchParams ,useLocation} from "react-router-dom"
import { getBooks } from "../data/data"

const Books = () => {
  let [searchParams, setSearchParams]= useSearchParams()
  let location = useLocation()
  const books = getBooks()

  return (
    <div className="book3">
      <div className="Books">
        <input type="text" placeholder="Search" 
        value={searchParams.get("filter")}
        onChange={event =>{
          let filter=event.target.value
          if(filter){ 
            setSearchParams({filter})
          }else{ 
            setSearchParams({})
          }
        }}
        
        />

        {
          books.filter(book =>{ 
            let filter = searchParams.get("filter")
            if(!filter) return true 
            let name=book.name 
            return name.startsWith(filter)

          })
          
          .map(book => (
            <NavLink className="book2" style={({ isActive }) => {
              return {
                
                color: isActive ? "darkgray" : ""
              },{textDecoration:"none",color:"black"}              
            }}
              to={`${book.id}${location.search}`} key={book.id}>{book.name}</NavLink>
          ))
        }
      </div>
      <Outlet />
    </div>
  )
}
export default Books