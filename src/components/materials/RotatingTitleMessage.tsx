// MUI
import Typography from '@mui/material/Typography';
// reactbits
import RotatingText from '@/components/reactbits/RotatingText';

type RotatingTitleMessageProps = {
    fixedText: string;
    rotatingText: string[];
    className?: string;
};

export const RotatingTitleMessage = (props: RotatingTitleMessageProps) => {
    const { fixedText, rotatingText, className = '' } = props;

    return (
        <div className={`flex w-full items-center justify-center gap-2 px-2 ${className}`}>
            <Typography
                color='primary'
                fontWeight='bold'
                sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '3rem',
                        md: '4rem',
                        lg: '5rem',
                    },
                }}
                className='text-primary text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl'>
                {fixedText}
            </Typography>
            <Typography
                color='primary'
                fontWeight='bold'
                sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '3rem',
                        md: '4rem',
                        lg: '5rem',
                    },
                }}
                className='text-primary font-mono text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl'>
                <RotatingText
                    texts={rotatingText}
                    mainClassName='px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-1 justify-center rounded-lg transition-all duration-500 ease-in-out'
                    style={{ transition: 'width 1s ease-in-out' }} 
                    // 幅の変化を滑らかにしたい
                    staggerFrom='last'
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-120%' }}
                    staggerDuration={0.025}
                    splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
                    transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 400,
                    }}
                    rotationInterval={2000}
                />
            </Typography>
        </div>
    );
};
