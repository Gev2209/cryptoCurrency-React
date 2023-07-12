import './index.css'
const Pageination = (props) => {
    const {page,onHandleChangePagination} = props
    return (
        <div className="Pagination">
            <button className="Pagination-button"
            disabled={page === 1} 
            onClick={() => {
                onHandleChangePagination('prev')
            }}>
                &larr;
            </button>

            <span className="Pagination-info">
                Page {page} of 10
            </span>

            <button className="Pagination-button"
                onClick={() => {
                onHandleChangePagination('next')
            }}>
                &rarr;
            </button>
        </div>
    )
}

export default Pageination;