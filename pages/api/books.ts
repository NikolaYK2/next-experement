// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

type BooksDB = {
  id: number;
  title: string;
};

const booksDB = [
  {id: 1, title: 'name'},
  {id: 2, title: 'title'},
  {id: 3, title: 'banana'}
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BooksDB[]>,
) {
  if (req.method === "GET") {
    let books = booksDB

    const tern = req.query.term as string;

    if (tern) {
      books = books.filter(book => book.title.toLowerCase().includes(tern.toLowerCase()));//поиск книг по title
    }

    res.status(200).json(books);
  }

}
