interface Writer {
    id: number;
    name: string;
  }
  
  interface Book {
    writerId: number;
    title: string;
    type: string;
    numberOfWords: number;
  }
  
  function getAmountPublishedInFantasy(writers: Writer[], books: Book[], writerName: string): number {
    const writer = writers.find(writer => writer.name === writerName);
  
    if (!writer) {
      return 0;
    }
  
    const fantasyBooks = books.filter(book => book.writerId === writer.id && book.type === "fantasy");
  
    const totalWordsInFantasy = fantasyBooks.reduce((sum, book) => sum + book.numberOfWords, 0);
  
    return totalWordsInFantasy;
  }
  
  const writers: Writer[] = [
    { id: 1, name: "J. K. Rowling" },
  ];
  
  const books: Book[] = [
    { writerId: 1, title: "Harry Potter and the Order of the Phoenix", type: "fantasy", numberOfWords: 122350 },
  ];
  
  const writerNameToSearch = "J. K. Rowling";
  const fantasyWordCount = getAmountPublishedInFantasy(writers, books, writerNameToSearch);
  console.log(`${writerNameToSearch} has written ${fantasyWordCount} words in the fantasy genre.`);
  