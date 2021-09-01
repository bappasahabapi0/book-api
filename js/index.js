const searchInput = document.getElementById('search-input');
const bookContainer = document.getElementById('book-container');


const searchBook = () => {
    const search = searchInput.value;
    searchInput.value = '';


    // fetch the url
    const url = `http://openlibrary.org/search.json?q=${search}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showData(data.docs))
    // .then(data => showData(data.docs[0].title))

    //show data
    const showData = books => {
        books.forEach(book => {
            console.log(book.title);

            // create and append div 
            const div = document.createElement('div');
            div.classList.add('col-md-4');
            div.innerHTML = `
             <div class="border border-primary p-2">
                <h6 >Book Name:<span class="fw-bold">${book.title}</span> </h6>
                <p>book author:</p>
                <p>book publisher name</p>
                <p>book first  published year</p>
            </div>
            `;
            bookContainer.appendChild(div)

        })

    }
}
