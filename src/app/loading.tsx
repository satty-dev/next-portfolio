export default function Loading() {
    return (
        <div className='mt-10 flex items-center justify-center gap-6'>
            <div className='h-10 w-10 animate-spin rounded-full border-[5px] border-sky-400 border-t-transparent'></div>
            <p className='font-weight text-[30px]'>Loading</p>
        </div>
    );
}
