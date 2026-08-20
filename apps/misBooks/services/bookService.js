import { eventBusService } from '../../../services/event-bus.service.js'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
  query,
  get,
  remove,
  save,
}
export function showSuccessMsg(txt) {
  eventBusService.emit('user-msg', { txt, type: 'success' })
}

function query(filterBy = null) {
  return storageService.query(BOOK_KEY).then((books) => {
    if (!filterBy) {
      return books
    } else if (filterBy.txt) {
      const txt = filterBy.txt
      return books.filter((b) => {
        return (
          b.title.includes(txt) ||
          b.subtitle.includes(txt) ||
          b.description.includes(txt)
        )
      })
    } else if (filterBy.limitPages) {
      const limitPages = filterBy.limitPages
      return books.filter((b) => {
        return b.pageCount < Number(limitPages)
      })
    } else if (filterBy.price) {
      const price = filterBy.price
      return books.filter((b) => {
        return b.listPrice.amount < Number(price)
      })
    }
    return books
  })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId)
}

export function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
  if (book.id) return storageService.put(BOOK_KEY, book)
  else return storageService.post(BOOK_KEY, book)
}

// function _createBooks() {
//   let booksInStorage = utilService.loadFromStorage(BOOK_KEY)
//   if (!booksInStorage || !booksInStorage.length) {
//     utilService.saveToStorage(BOOK_KEY, bookStarter)
//   }
// }

export const initBook = (i = 10) => {
  return
}

function _createBooks() {
  let booksInStorage = utilService.loadFromStorage(BOOK_KEY)
  if (!booksInStorage || !booksInStorage.length) {
    const books = []
    const ctgs = ['Love', 'Fiction', 'Poetry', 'Computers', 'Religion']

    for (let i = 0; i < 20; i++) {
      const book = {
        id: utilService.makeId(),
        title: utilService.makeLorem(2),
        subtitle: utilService.makeLorem(4),
        authors: [utilService.makeLorem(1)],
        publishedDate: utilService.getRandomIntInclusive(1950, 2024),
        description: utilService.makeLorem(20),
        pageCount: utilService.getRandomIntInclusive(20, 600),
        categories: [
          ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)],
        ],
        thumbnail: `https://coding-academy.org/books-photos/${i + 1}.jpg`,
        language: 'en',
        listPrice: {
          amount: utilService.getRandomIntInclusive(80, 500),
          currencyCode: 'EUR',
          isOnSale: Math.random() > 0.7,
        },
      }
      books.push(book)
    }
    console.log('books', books)
    utilService.saveToStorage(BOOK_KEY, books)
  }
}
