// components
import { Template } from '@/components/layouts/Template';
import { Counter } from '@/components/practice/counter/Counter';

export const TemplatePractice01 = () => {
    return (
        <Template>
            <div className='container mx-auto py-[50px]'>
                <h2 className='mb-5 text-[50px] font-bold'>
                    Practice01:Counter
                </h2>
                <Counter />
            </div>
        </Template>
    );
};
