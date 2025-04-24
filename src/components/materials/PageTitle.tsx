// MUI
import Typography from '@mui/material/Typography';

// rectbits
import { GradientText } from '@/components/reactbits/GradientText';

type PageTitleProps = {
    title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
    return (
        <Typography
            variant='h2'
            gutterBottom>
            <GradientText
                colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
                animationSpeed={5}
                showBorder={false}>
                {title}
            </GradientText>
        </Typography>
    );
};
