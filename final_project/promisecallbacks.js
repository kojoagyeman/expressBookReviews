// TASK 10
public_users.get('/books', async function (req, res) {
  try {
    await new Promise((resolve) => {
      resolve(res.send(JSON.stringify({ books }, null, 4)));
    });
    console.log("Promise for Task 10 resolved");
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

// TASK 11
public_users.get('/books/isbn/:isbn',function (req, res) {
    const get_books_isbn = new Promise((resolve, reject) => {
    const isbn = req.params.isbn;
    // console.log(isbn);
        if (req.params.isbn <= 10) {
        resolve(res.send(books[isbn]));
    }
        else {
            reject(res.send('ISBN not found'));
        }
    });
    get_books_isbn.
        then(function(){
            console.log("Promise for Task 11 is resolved");
   }).
        catch(function () { 
                console.log('ISBN not found');
  });

});


// TASK 12
public_users.get('/books/author/:author',function (req, res) {

    const get_books_author = new Promise((resolve, reject) => {

    let booksbyauthor = [];
    let isbns = Object.keys(books);
    isbns.forEach((isbn) => {
      if(books[isbn]["author"] === req.params.author) {
        booksbyauthor.push({"isbn":isbn,
                            "title":books[isbn]["title"],
                            "reviews":books[isbn]["reviews"]});
      resolve(res.send(JSON.stringify({booksbyauthor}, null, 4)));
      }


    });
    reject(res.send("The mentioned author does not exist "))

    });

    get_books_author.then(function(){
            console.log("Promise is resolved");
   }).catch(function () { 
                console.log('The mentioned author does not exist');
  });

  });


// TASK 13
public_users.get('/books/title/:title',function (req, res) {

    const get_books_title = new Promise((resolve, reject) => {

    let booksbytitle = [];
    let isbns = Object.keys(books);
    isbns.forEach((isbn) => {
      if(books[isbn]["title"] === req.params.title) {
        booksbytitle.push({"isbn":isbn,
                            "author":books[isbn]["author"],
                            "reviews":books[isbn]["reviews"]});
    resolve(res.send(JSON.stringify({booksbytitle}, null, 4)));
      }
    });

    reject(res.send("The mentioned title does not exist "))

       });

    get_books_title.then(function(){
            console.log("Promise is resolved");
   }).catch(function () { 
                console.log('The mentioned book title doesnt exist');
  });

  });
