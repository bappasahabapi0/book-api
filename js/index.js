// Coded by bappa saha 
const searchInput = document.getElementById('search-input');
const bookContainer = document.getElementById('book-container');
const total = document.getElementById('total');
const errorDiv = document.getElementById('error');


// handling the toggle error and total text 
total.style.display = 'none';
errorDiv.style.display = 'none';

const errorMessage = () => {
    errorDiv.style.display = 'block'
    total.style.display = 'none'


};

// search the books 
const searchBook = () => {
    const searchText = searchInput.value;

    // Error handling 
    if (searchText === '') {
        errorMessage();
        alert('empty name is not accepted')
    }
    else {
        errorDiv.style.display = 'none';

        //clear input value and search result
        searchInput.value = '';
        bookContainer.textContent = '';

        // fetch the url
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(data => showData(data.docs))
    }
}
//show data
const showData = books => {

    if (books === null) {
        errorMessage();
    }
    else {
        errorDiv.style.display = 'none';
        total.style.display = 'block';

        // show total search 
        total.innerText = `Search Result is 📙 : ${books.length}`;

        books?.forEach(book => {

            // create and append div 
            const div = document.createElement('div');
            div.classList.add('col-md-4');
            div.innerHTML = `
             <div class="border border-primary p-2 m-1">
                    <div class="rounded overflow-hidden border p-2 w-80">
                        <img
                        src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"
                        class="w-100"
                        alt="no image found"
                        />
                    </div>
                    <div class="overflow-hidden">
                        <h6 >Book Name: <span class="fw-bold overflow-hidden">  ${book.title.slice(0, 50)}</span> </h6>
                        <p>book Author Name:  <span class="fw-bold overflow-hidden"> ${book.author_name ? book.author_name : 'Not found'}</span> </p>
                        <p>book publisher name: <span class="fw-bold overflow-hidden"> ${book.publisher ? book.publisher : 'Not Found'}</span></p>
                        <p>First published year: <span class="fw-bold overflow-hidden"> ${book.first_publish_year ? book.first_publish_year : 'Not given'}</span> </p>
                    </div>
            </div>
            `;
            bookContainer.appendChild(div)
        })
    }
}
