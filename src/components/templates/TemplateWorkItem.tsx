// MUI
import {
    Box,
    Typography,
    Card,
    CardMedia,
    Stack,
    Chip,
    Grid,
} from '@mui/material';

// components
import { Template } from '@/components/layouts/Template';

// types
import { TWork } from '@/types/index';

type TemplateWorkItemProps = {
    work: TWork;
};

const ImageCard = ({ image, alt }: { image: string; alt: string }) => (
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
                image={image}
                alt={alt}
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
);

export const TemplateWorkItem = ({ work }: TemplateWorkItemProps) => {
    const [mainImage, ...subImages] = work.images;

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

                    <ImageCard
                        image={mainImage}
                        alt={work.title}
                    />

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

                    {subImages.length > 0 && (
                        <Grid
                            container
                            spacing={2}>
                            {subImages.map((image) => (
                                <Grid
                                    key={image}
                                    size={{
                                        xs: 12,
                                        sm: subImages.length === 1 ? 12 : 6,
                                        md: subImages.length === 1 ? 12 : 6,
                                    }}>
                                    <ImageCard
                                        image={image}
                                        alt={work.title}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>
            </Box>
        </Template>
    );
};
