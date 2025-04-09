// components
import BlogList from '@/components/BlogList';
import { Template } from '@/components/layouts/Template';

export default async function BlogPage() {
    return (
        <Template>
            <div className='container mx-auto py-[50px]'>
                <h2 className='mb-5 text-[50px] font-bold'>Blog</h2>
                <BlogList waitTime={3000} />
            </div>
        </Template>
    );
}
