// Book Class: Represents  a Book

class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
  }
}

//UI Class: Handle UI Tasks
 class UI{
     static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'Kojo John Snow',
                isbn: '112244'
            },
            {
                title: 'American Gods',
                author: 'Kojo John Snow',
                isbn: '11224455'
            }
        ] ;

        const books = StoredBooks;

        books.forEach((book)=> UI.addBookToList(book));
        
     }

     static addBookToList(book){
         const list = document.querySelector('#book-list');
         const row = document.createElement('tr');

         row.innerHTML = `
         <td> ${book.title} </td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
         `;
         list.appendChild(row);
        
     }

     static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
     }
     static deleteBook(targetElement){
         if(targetElement.classList.contains('delete')){
            targetElement.parentElement.parentElement.remove();
         }
     }
 }

//Store Class: Handles Storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book 
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    //Prevent actual submit
    e.preventDefault();
    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validate
    if(title === ''|| author === '' || isbn === ''){
        alert('please add the required information');
    } else{ 

            //instantiate a book class 
    const book = new Book(title, author, isbn); 
    // console.log(book);

    //Add Book to UI
    UI.addBookToList(book);

    //Clear fields
    UI.clearFields();

    }


});

//Event: remove a book
document.querySelector('#book-list').addEventListener('click', (e)=>
{
    UI.deleteBook(e.target);
});