// MUI
import { Typography } from '@mui/material';

// components
import { Template } from '@/components/layouts/Template';
import { Counter } from '@/components/practice/counter/Counter';

export const TemplatePractice01 = () => {
    return (
        <Template>
            <div className='container mx-auto py-[10px]'>
                <h2 className='mb-5 text-center text-[50px] font-bold'>
                    Counter
                </h2>
                <Typography
                    variant='body2'
                    color='text.secondary'
                    align='center'
                    sx={{ mt: 1, mb: 1 }}>
                    This counter was created for learning Next.js.
                </Typography>
                <Counter />
            </div>
        </Template>
    );
};
