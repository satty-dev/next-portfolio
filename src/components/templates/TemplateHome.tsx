// MUI
import {
    Avatar,
    Box,
    Button,
    Divider,
    Grid,
    Stack,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

// components
import { Template } from '@/components/layouts/Template';
import { RotatingTitleMessage } from '@/components/materials/RotatingTitleMessage';
import { MediaCard } from '@/components/materials/MediaCaed';

// types
import { THome, TWork, TAbout } from '@/types/index';

type TemplateHomeProps = {
    home: THome;
    works: TWork[];
    about: TAbout;
};

export const TemplateHome = (props: TemplateHomeProps) => {
    const { home, works, about } = props;

    return (
        <Template>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 6,
                }}
                className='container mx-auto py-[10px]'>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                        alignItems: 'center',
                        gap: 4,
                    }}>
                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                md: '50%',
                            },
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <Image
                            src={home.main_image}
                            alt='Main Visual'
                            width={500}
                            height={300}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                            }}
                            loading='eager'
                        />
                    </Box>

                    <Box
                        sx={{
                            width: {
                                xs: '100%',
                                md: '50%',
                            },
                            textAlign: {
                                xs: 'center',
                                md: 'left',
                            },
                        }}>
                        <RotatingTitleMessage
                            fixedText={home.rotating_message.fixed_text}
                            rotatingText={
                                home.rotating_message.rotating_text_arry
                            }
                            className='my-2'
                        />

                        <Typography
                            component='div'
                            fontWeight='bold'
                            sx={{
                                fontSize: {
                                    xs: '1.4rem',
                                    sm: '2.1rem',
                                    md: '2.4rem',
                                    lg: '2.7rem',
                                },
                                lineHeight: 1.2,
                                marginBottom: '1rem',
                            }}>
                            {home.sub_message}
                        </Typography>

                        {/* <Typography component='div'>
                            {home.description}
                        </Typography> */}
                    </Box>
                </Box>

                <Divider sx={{ width: '100%' }} />

                <Stack
                    alignItems='center'
                    textAlign='center'
                    spacing={2}
                    sx={{ maxWidth: 600 }}>
                    <Avatar
                        alt={about.name}
                        src={about.images.photo}
                        sx={{ width: 120, height: 120 }}
                    />
                    <Box>
                        <Typography
                            variant='h5'
                            fontWeight='bold'>
                            {about.name}
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            color='text.secondary'>
                            {about.job}
                        </Typography>
                    </Box>
                    <Typography variant='body1'>{about.bio}</Typography>
                    <Button
                        component={Link}
                        href='/about'
                        variant='outlined'
                        color='primary'
                        sx={{ textTransform: 'none' }}>
                        View About
                    </Button>
                </Stack>

                <Divider sx={{ width: '100%' }} />

                <Box sx={{ width: '100%' }}>
                    <Typography
                        variant='h4'
                        fontWeight='bold'
                        textAlign='center'
                        gutterBottom>
                        Featured Works
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                        sx={{ mb: 3 }}>
                        {works.slice(0, 3).map((work) => (
                            <Grid
                                key={work.id}
                                size={{ xs: 12, sm: 6, md: 4 }}>
                                <MediaCard work={work} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <Button
                            component={Link}
                            href='/works'
                            variant='outlined'
                            color='primary'
                            sx={{ textTransform: 'none' }}>
                            View All Works
                        </Button>
                    </Box>
                </Box>
            </Box>
            {/* <div>{home.title}</div>
            <div>{home.main_image}</div>
            <div>{home.sub_message}</div>
            <div>{home.description}</div> */}
        </Template>
    );
};
