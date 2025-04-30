// MUI
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';

// components
import { Template } from '@/components/layouts/Template';

// types
import { TWork } from '@/types/index';

type TemplateWorkItemProps = {
    work: TWork;
};

export const TemplateWorkItem = ({ work }: TemplateWorkItemProps) => {
    return (
        <Template>
            <Box className='container mx-auto py-[50px]'>
                <Typography
                    variant='h3'
                    fontWeight='bold'
                    gutterBottom>
                    {work.title}
                </Typography>

                <Card>
                    <CardMedia
                        component='img'
                        height='300'
                        image={work.image}
                        alt={work.title}
                    />
                    <CardContent>
                        <Typography
                            variant='body1'
                            gutterBottom>
                            {work.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Template>
    );
};
