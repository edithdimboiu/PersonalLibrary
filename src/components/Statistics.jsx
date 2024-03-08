export default function Statistics({ readBooks, myLibrary }) {
  const countedReadBooks = {};
  const countedMyLibraryBooks = {};
  let booksWithPrice = 0;

  const readPages = readBooks.reduce((accumulator, book) => {
    if (!countedReadBooks[book.id]) {
      accumulator += book.volumeInfo.pageCount;
      countedReadBooks[book.id] = true;
    }
    return accumulator;
  }, 0);

  const investment = myLibrary
    .reduce((accumulator, book) => {
      const price = book.saleInfo?.listPrice?.amount;

      if (price) {
        accumulator += price;
        countedMyLibraryBooks[book.id] = true;
        booksWithPrice++;
      }
      return accumulator;
    }, 0)
    .toFixed(2);

  const booksWithoutPrice = myLibrary.length - booksWithPrice;

  return (
    <div className="statistics">
      <h2>Your readings in numbers</h2>
      <li>
        Until now you read <strong>{readPages} pages</strong>
      </li>
      <li>
        You invested{" "}
        {booksWithoutPrice !== 0 ? <strong>approximately</strong> : null}{" "}
        <strong>{investment} CHF</strong> in your personal library.{" "}
        {booksWithoutPrice !== 0 && (
          <>
            We cannot give you the exact amount because{" "}
            <strong>
              {booksWithoutPrice === 1
                ? "there is 1 book"
                : `there are ${booksWithoutPrice} books`}{" "}
              without price
            </strong>{" "}
            in our data.
          </>
        )}
      </li>
    </div>
  );
}
