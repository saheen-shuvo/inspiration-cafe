
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks =( {bookmarks, readingTime}) => {
  return (
    <div className="w-1/3">
      <div className='ml-4 py-4 border-2 bg-yellow-400 mt-2 rounded-md'>
        <h3 className='text-3xl text-center font-semibold'>Reading Time: {readingTime}</h3>
      </div>
        <h2 className="text-3xl font-semibold ml-4 pt-4">Bookmarked Blogs: {bookmarks.length}</h2>
        {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
    </div>
  )
}

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks