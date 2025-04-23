import * as React from 'react';

// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// types
import { TWork } from '@/types/index';

type MediaCardProps = {
    work: TWork;
};

export const MediaCard = (props: MediaCardProps) => {
    const { work } = props;
    return (
        <Card sx={{ maxWidth: 'xs' }}>
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
            <CardActions>
                <Button size='small'>Share</Button>
                <Button
                    size='small'
                    href={`/works/${work.id}`}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};
