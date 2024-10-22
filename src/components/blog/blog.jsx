import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
  return (
    <div className="mb-20">
      <img className="w-full rounded-lg mb-8" src={cover} alt="" />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl font-semibold font-style">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-3xl font-semibold font-style">{title}</h2>
      <p className="mt-2 text-blue-800 text-sm font-medium">
        {
          hashtags.map((hash, idx) => <span key={idx}><a href="">#{hashtags} </a></span>)
        }
      </p>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
