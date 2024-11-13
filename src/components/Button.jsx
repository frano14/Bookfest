/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button({ text, path = "" }) {
  return (
    <Link
      to={`/${path}`}
      className="rounded-xl px-6 py-2 bg-gray text-white hover:bg-orange transition"
    >
      {text}
    </Link>
  );
}
