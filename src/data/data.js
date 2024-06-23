const books=[
    {
        name: "ICDL",
        price: "22.000.000",
        author: "Matin Mohammadi",
        id:"01",
        image:"https://sariasan.com/wp-content/uploads/2017/12/icdl69696.jpg"
    },
    {
        name: "Python",
        price: "15.000.000",
        author: "Matin Mohammadi",
        id:"02",
        image:"https://devblogs.microsoft.com/python/wp-content/uploads/sites/12/2018/08/pythonfeature.png"
    },
    {
        name: "Scratch3",
        price: "15.000.000",
        author: "Matin Mohammadi",
        id:"03",
        image:"https://cdn-learn.adafruit.com/guides/cropped_images/000/002/359/medium640thumb/scratch_cover_update.gif?1547585431"
    },
    {
        name: "Front-end",
        price: "130.000.000",
        author: "Anformatic-instute",
        id:"04",
        image:"https://files.virgool.io/upload/users/1494395/posts/egojcynbonvc/rgsvjohygsb5.png"
    },
    {
        name: "Back-end",
        price: "140.000.000",
        author: "Anformatic-instute",
        id:"05",
        image:"https://blog.faradars.org/wp-content/uploads/2022/08/back-end-programming-languages.jpg"
    },
]

export const getBooks=()=>{
    return books;
}
export const getBook=(id) =>{
    return books.find(book=> book.id == id)
}