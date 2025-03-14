// Реализуйте класс Book, который будет представлять книгу с указанными ниже
// свойствами и методами:
// ● Свойства:
// ○ title (название) - строка, представляющая название книги.
// ○ author (автор) - строка, представляющая имя автора книги.
// ○ pages (количество страниц) - число, представляющее количество
// страниц в книге.
// ● Методы:
// ○ displayInfo() - метод, который выводит информацию о книге в
// формате: Название: {title}, Автор: {author}, Страниц:
// {pages}.

// const book1 = new Book("1984", "Джордж Оруэлл", 328);
// book1.displayInfo();
// // Вывод: Название: 1984, Автор: Джордж Оруэлл, Страниц: 328

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Название: ${this.title}, Автор: ${this.author}, Страниц: ${this.pages}`);
  }
}

const book1 = new Book("1984", "Джордж Оруэлл", 328 );
book1.displayInfo();