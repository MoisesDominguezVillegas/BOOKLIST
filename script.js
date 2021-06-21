// La clase Book
// Book Class: Represents a Book

class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

const defaultBooks = [
	{
		title: 'Book 1',
		author: 'Brad Traversy',
		isbn: '12345'
	},
	{
		title: 'Book 2',
		author: 'Mehul Mohan',
		isbn: '6789'
	}
]

// UI Class: Handle UI Tasks

class UI{

    static displayBooks(){
        // let books = Store.getBooks();
        defaultBooks.forEach((book) => UI.addBookToList(book))
    }


    static addBookToList(book){
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
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


    static deleteBook(el){
   
// inside UI.deleteBook:
    if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
    }

 }
 

}

// Event: Display Books

UI.displayBooks();

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', addABook, false);

function addABook(e) {
	// prevent actual submission
	e.preventDefault();

    // Capturar los valores del Form
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const isbn = document.getElementById("isbn").value
	

	// Crear un nuevo objeto book
    const book = new Book(title, author, isbn);
	// Añadir el objeto book creado a UI (mostrarlo en HTML)
    UI.addBookToList(book);
    UI.clearFields()
}

   