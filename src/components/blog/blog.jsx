import { FaRegBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 font-sans">
      <img className="w-full rounded-lg mb-8" src={cover} alt="" />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl font-semibold font-style">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-lg text-red-700">
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-semibold font-style">{title}</h2>
      <p className="mt-2 text-blue-800 text-sm font-medium">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hashtags} </a>
          </span>
        ))}
      </p>
      <button className="font-semibold cursor-pointer underline font-sans" onClick={() => handleMarkAsRead(id, reading_time)}>Mark As Read</button>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
