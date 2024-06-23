import { useParams } from "react-router-dom"
import { getBook } from "../data/data"

const Book = () =>{
    let params= useParams()
    console.log(params)
    let book= getBook(params.bookId)
    console.log(book)
    if(book){
        return(
            <div >
              <img src={book.image} alt="" />
               <p> {book.name}</p>
               <p> {book.author}</p>
                <p>{book.price}</p>
                <button className="btn btn-primary">حذف کردن کتاب</button>
            </div>
        )
    }else{
        return(
            <div>Not found</div>
            
        )
    }
}
export default Book