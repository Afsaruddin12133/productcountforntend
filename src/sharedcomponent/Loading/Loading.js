
const Loading = () => {
    return (
        <div className='flex justify-center items-center space-x-2 mt-80 mb-80'>
            <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        </div>
    );
};

export default Loading;