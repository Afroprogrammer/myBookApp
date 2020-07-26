// Book Class: Represents  a Book

class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn;
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
            },
        ] ;

        const books = StoredBooks;

        books.forEach(()=> UI.addBookToList(book));
     }

     static addBookToList(book){
         const list = document.querySelector('#book-list');
         const row = document.createElement('tr');

         row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td></td>
         `
     }
 }

//Store Class: Handles Storage