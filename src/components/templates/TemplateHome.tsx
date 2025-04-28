// MUI
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

// components
import { Template } from '@/components/layouts/Template';
import { RotatingTitleMessage } from '@/components/materials/RotatingTitleMessage';

// types
import { THome } from '@/types/index';

type TemplateHomeProps = {
    home: THome;
};

export const TemplateHome = (props: TemplateHomeProps) => {
    const { home } = props;

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
                className='container mx-auto py-[50px]'>
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
            </Box>
            {/* <div>{home.title}</div>
            <div>{home.main_image}</div>
            <div>{home.sub_message}</div>
            <div>{home.description}</div> */}
        </Template>
    );
};
