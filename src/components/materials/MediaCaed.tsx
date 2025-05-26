import * as React from 'react';
import Link from 'next/link';

// MUI
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography,
} from '@mui/material';

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
                        sx={{
                            height: 180,
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        image={work.image}
                        title={work.title}
                    />
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}>
                        <Typography
                            gutterBottom
                            variant='h6'
                            component='div'>
                            {work.title}
                        </Typography>
                        <Typography
                            variant='body2'
                            color='text.secondary'>
                            {work.description}
                        </Typography>
                        <Stack
                            direction='row'
                            spacing={1}
                            useFlexGap
                            flexWrap='wrap'
                            sx={{ mt: 1 }}>
                            {work.skills.map((skill) => (
                                <Chip
                                    key={skill}
                                    label={skill}
                                    size='small'
                                    color='primary'
                                />
                            ))}
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};
