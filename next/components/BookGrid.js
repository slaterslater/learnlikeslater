// components/Bookgrid.js

const BookGrid = ({books}) => {
  // console.log(books)

  const handleClick = async e => {
    const res = await fetch(`/api/book/${e.target.dataset.slug}`)
    const text = await res.text()
    console.log(text)
  }

  return books.map(book => (
    <p key={book.id}>{book.name} <button type='button' data-slug={book.slug} onClick={handleClick}>GO</button></p>
  ))
}

export default BookGrid 