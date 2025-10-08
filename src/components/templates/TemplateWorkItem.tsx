// MUI
import { Box, Typography, Card, CardMedia, Stack, Chip } from '@mui/material';

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
            <Box className='container mx-auto px-4 py-[10px]'>
                <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
                    <Typography
                        variant='h3'
                        fontWeight='bold'
                        gutterBottom>
                        {work.title}
                    </Typography>

                    <Card elevation={3}>
                        {/* アスペクト比16:9で画像を表示 */}
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                pt: '56.25%', // 16:9 = 9 / 16 * 100
                            }}>
                            <CardMedia
                                component='img'
                                image={work.image}
                                alt={work.title}
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />
                        </Box>
                    </Card>
                    <Box
                        className='py-4'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}>
                        {work.skills?.length > 0 && (
                            <Stack
                                direction='row'
                                spacing={1}
                                useFlexGap
                                flexWrap='wrap'>
                                {work.skills.map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        size='small'
                                        color='primary'
                                    />
                                ))}
                            </Stack>
                        )}

                        <Typography
                            variant='body1'
                            color='text.secondary'>
                            {work.description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Template>
    );
};
