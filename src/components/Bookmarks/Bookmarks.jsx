import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks,readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-2">
            <div className='text-3xl text-center mb-3'>
                Reading time:{readingTime}
            </div>
            <h2 className="text-3xl text-center ">Bookmarked blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;