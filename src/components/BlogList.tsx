import Link from 'next/link';

interface TBlog {
    id: string;
    title: string;
    content: string;
}

const getBlogData = async (waitTime: number) => {
    //ルーディング画面がわかりやすくするために処理
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    const res = await fetch('http://localhost:3000/api/blog', {
        cache: 'no-store',
    });

    const blogData = await res.json();

    return blogData;
};

export default async function BlogList({ waitTime }: { waitTime: number }) {
    const blogData = await getBlogData(waitTime);

    return (
        <div className='mb-3 grid grid-cols-12 gap-3'>
            {blogData.map((blog: TBlog) => (
                <div
                    className='col-span-4 rounded border border-black p-5'
                    key={blog.id}>
                    <Link
                        href={`/blog/${blog.id}`}
                        className='w-full'>
                        <h2>{blog.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
