class Library {
    constructor(books = []) {
       if (new Set(books.map(book => book.title)).size !== books.length) {
         throw new Error('Указанный массив книг содержит дубликаты');
       }
       this.#books = books;
    }
   
    get allBooks() {
       return this.#books;
    }
   
    addBook(title) {
       if (this.#books.some(book => book.title === title)) {
         throw new Error('Книга с таким названием уже существует');
       }
       this.#books.push({ title });
    }
   
    removeBook(title) {
       const index = this.#books.findIndex(book => book.title === title);
       if (index === -1) {
         throw new Error('Книги с таким названием нет в списке');
       }
       this.#books.splice(index, 1);
    }
   
    hasBook(title) {
       return this.#books.some(book => book.title === title);
    }
   }
   

// const reviewsContainer = document.getElementById('reviewsContainer');
// const reviewInput = document.getElementById('reviewInput');
// const submitReview = document.getElementById('submitReview');

// submitReview.addEventListener('click', () => {
//     const reviewText = reviewInput.value.trim();
//     if (reviewText.length < 50 || reviewText.length > 500) {
//         alert('Длина отзыва должна быть от 50 до 500 символов');
//         return;
//     }
//     const reviewElement = document.createElement('p');
//     reviewElement.textContent = reviewText;
//     reviewsContainer.appendChild(reviewElement);
//     reviewInput.value = ''; // Очищаем поле ввода после добавления отзыва
// });

// // Инициализация данных отзывов
// const initialData = [
//     {
//         product: "Apple iPhone 13",
//         reviews: [
//             {
//                 id: "1",
//                 text: "Отличный телефон! Батарея держится долго.",
//             },
//             {
//                 id: "2",
//                 text: "Камера супер, фото выглядят просто потрясающе.",
//             },
//         ],
//     },
//     // Остальные продукты...
// ];

// initialData.forEach(product => {
//     product.reviews.forEach(review => {
//         const reviewElement = document.createElement('p');
//         reviewElement.textContent = review.text;
//         reviewsContainer.appendChild(reviewElement);
//     });
// });
