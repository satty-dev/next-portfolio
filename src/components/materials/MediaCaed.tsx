import * as React from 'react';
import Link from 'next/link';

// MUI
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// types
import { TWork } from '@/types/index';

type MediaCardProps = {
    work: TWork;
};

export const MediaCard = (props: MediaCardProps) => {
    const { work } = props;
    return (
        <Card
            sx={{
                maxWidth: 'xs',
                transition: 'opacity 0.3s',
                opacity: 1,
                '&:hover': {
                    opacity: 0.8,
                },
            }}>
            <Link
                href={`/works/${work.id}`}
                passHref
                legacyBehavior>
                <CardActionArea component='a'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={work.image}
                        title={work.title}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant='h5'
                            component='div'>
                            {work.title}
                        </Typography>
                        <Typography
                            variant='body2'
                            sx={{ color: 'text.secondary' }}>
                            {work.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};
