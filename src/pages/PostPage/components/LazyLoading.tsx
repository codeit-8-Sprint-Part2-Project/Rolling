import LoadingSpinner from "../../ListPage/components/UI/LoadingSpinner";

function LazyLoading() {

    return (
        <div className="bg-white/50 flex justify-center items-center fixed inset-0 z-50">
            <LoadingSpinner />
        </div>
    )
}

export default LazyLoading;