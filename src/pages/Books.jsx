/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Book from "../components/Book";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { Link } from "react-router-dom";

const apiKey = "AIzaSyDlRCQpD8rlI3ivvO26mHQvIwBigmyzr5M";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noSearch, setNoSearch] = useState(false);
  const [query, setQuery] = useState("");
  const baseUrl = `https://www.googleapis.com/books/v1/volumes`;

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim() === "") {
        setBooks([]);
        return;
      }

      const fetchBooks = async () => {
        try {
          setIsLoading(true);
          setNoSearch(false);
          const res = await fetch(
            `${baseUrl}?q=${encodeURIComponent(query)}&key=${apiKey}`
          );
          const data = await res.json();
          if (data.items) {
            setBooks(data.items);
            setIsLoading(false);
            console.log(data.items);
          } else {
            setBooks([]);
            setIsLoading(false);
            setNoSearch(true);
          }
        } catch (err) {
          setBooks([]);
          throw new Error(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchBooks();
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [query, baseUrl]);

  return (
    <div className="relative">
      <div className="max-w-[1200px] m-auto px-6 xl:px-0 flex justify-center items-center flex-col">
        <NavBar />
        <div className="mb-12 ">
          <h1 className="mt-[64px] py-12 text-[22px] text-center customItalicFont ">
            Explore the world of <span className="text-orange">books </span>
            and find your next favorite story with a simple search.
          </h1>
          <input
            className="rounded-full px-8 py-3 w-full bg-white mb-6"
            placeholder="Enter a book title or author to search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-center items-center border-t-[10px] border-orange pb-16 ">
          {!isLoading && books.length > 0 ? (
            <div className="w-full grid l:grid-cols-4 ms:grid-cols-3 xs:grid-cols-2 grid-cols-1 ">
              {books.map((book, index) => (
                <Link key={index} to={`/books/${book.id}`}>
                  <Book book={book} />
                </Link>
              ))}
            </div>
          ) : (
            <div>
              {query === "" ? (
                <>
                  <div>
                    <Lottie animationData={animationData} loop={true} />
                  </div>
                  <p className=" text-[24px] text-textGray customMonserratFont text-center">
                    Search books by title or author
                    <span className="text-orange">...</span>
                  </p>
                </>
              ) : (
                <div className="text-[20px] text-textGray py-16 customMonserratFont text-center">
                  {noSearch ? (
                    <p>
                      Sorry, no results found for your search. Please try a
                      different term.
                    </p>
                  ) : (
                    <p>
                      Loading<span className="text-orange">...</span>
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
