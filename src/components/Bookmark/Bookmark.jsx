import PropTypes from "prop-types";
import Bookmarks from "../bookmarks/Bookmarks";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-300 rounded-xl p-4 m-4">
      <h3 className="text-2xl font-style font-semibold">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.array,
};
export default Bookmark;
