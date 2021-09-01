const searchInput = document.getElementById('search-input');
const bookContainer = document.getElementById('book-container');


const searchBook = () => {
    const searchText = searchInput.value;
    searchInput.value = '';
    bookContainer.textContent = '';

    // fetch the url
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showData(data.docs))
    // .then(data => showData(data.docs[0].title))

    //show data
    const showData = books => {
        books.forEach(book => {
            // console.log(book.title);
            console.log(book.author_name);

            // create and append div 
            const div = document.createElement('div');
            div.classList.add('col-md-4');
            div.innerHTML = `
             <div class="border border-primary p-2 m-1">
                    <div class="rounded overflow-hidden border p-2">
                        <img
                        src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"
                        class="w-100"
                        alt=""
                        />
                    </div>
                    <div>
                        <h6 >Book Name: <span class="fw-bold">  ${book.title}</span> </h6>
                        <p>book Author Name:  <span class="fw-bold"> ${book.author_name}</span> </p>
                        <p>book publisher name: <span class="fw-bold"> ${book.publisher}</span></p>
                        <p>First published year: <span class="fw-bold"> ${book.first_publish_year}</span> </p>
                    </div>
            </div>
            `;
            bookContainer.appendChild(div)
        })
    }
}
