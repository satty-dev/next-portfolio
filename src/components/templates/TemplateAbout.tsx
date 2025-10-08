// MUI
import {
    Avatar,
    Box,
    Chip,
    Stack,
    Typography,
    Divider,
    Card,
    CardContent,
    Link,
    Grid,
} from '@mui/material';

// icons
import {
    FaTools,
    FaGraduationCap,
    FaBuilding,
    FaCertificate,
    FaBook,
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

// components
import { Template } from '@/components/layouts/Template';
import { PageTitle } from '@/components/materials/PageTitle';

// types
import { TAbout } from '@/types/index';

type TemplateAboutProps = {
    about: TAbout;
};

export const TemplateAbout = ({ about }: TemplateAboutProps) => {
    // historiesをtypeでグループ分け
    const educations = about.histories.filter((h) => h.type === 'education');
    const careers = about.histories.filter((h) => h.type === 'career');

    return (
        <Template>
            <Box className='container mx-auto py-[10px]'>
                <PageTitle title='About Me' />
                <Typography
                    variant='h3'
                    gutterBottom>
                    {about.main_message}
                </Typography>

                {/* 写真＋プロフィール */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    alignItems='stretch'
                    spacing={0}
                    mb={4}
                    sx={{ width: '100%' }}>
                    {/* 写真：1/3（PC） */}
                    <Box
                        sx={{
                            flex: { xs: '1', md: '1' },
                            width: { xs: '100%', md: '100%' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            px: 0,
                            py: 2,
                        }}>
                        <Box
                            sx={{
                                width: { xs: '100%', md: '100%' },
                                aspectRatio: '3 / 4',
                                minWidth: 120,
                                minHeight: 160,
                                bgcolor: '#eee',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: 2,
                                display: 'flex',
                            }}>
                            <Avatar
                                alt={about.name}
                                src={about.images.photo}
                                variant='square'
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                }}
                            />
                        </Box>
                    </Box>

                    {/* プロフィール＋Skills＋Education＋Career：2/3（PC） */}
                    <Box
                        sx={{
                            flex: { xs: '1', md: '2' },
                            width: { xs: '100%', md: '100%' },
                            p: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                        }}>
                        <Box sx={{ px: { xs: 0, md: 4 }, py: 2 }}>
                            {/* プロフィール */}
                            <Typography
                                variant='h4'
                                fontWeight={'bold'}>
                                {about.name}
                            </Typography>
                            <Typography
                                variant='h5'
                                color='text.secondary'
                                gutterBottom>
                                {about.job}
                            </Typography>
                            <Typography
                                variant='body1'
                                mb={2}>
                                {about.bio}
                            </Typography>

                            {/* location */}
                            <Stack
                                direction='row'
                                alignItems='center'
                                spacing={1}
                                mb={1}>
                                <MdLocationOn />
                                <Typography
                                    variant='h6'
                                    gutterBottom>
                                    Location
                                </Typography>
                            </Stack>
                            <Stack
                                spacing={1}
                                mb={2}>
                                <Typography variant='body2'>
                                    {about.location}
                                </Typography>
                            </Stack>

                            {/* Skills */}
                            <Stack
                                direction='row'
                                alignItems='center'
                                spacing={1}
                                mb={1}>
                                <FaTools />
                                <Typography
                                    variant='h6'
                                    gutterBottom>
                                    Skills
                                </Typography>
                            </Stack>
                            <Stack
                                direction='row'
                                flexWrap='wrap'
                                mb={2}
                                sx={{gap: '0.5rem'}}>
                                {about.skills.map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        color='primary'
                                    />
                                ))}
                            </Stack>

                            {/* Education */}
                            <Stack
                                direction='row'
                                alignItems='center'
                                spacing={1}
                                mb={1}>
                                <FaGraduationCap />
                                <Typography
                                    variant='h6'
                                    gutterBottom>
                                    Education
                                </Typography>
                            </Stack>
                            <Stack
                                spacing={1}
                                mb={2}>
                                {educations.map((edu, idx) => (
                                    <Box
                                        key={idx}
                                        display='flex'
                                        alignItems='flex-start'>
                                        <Box minWidth={120}>
                                            <Typography
                                                variant='subtitle1'
                                                fontWeight='bold'
                                                color='primary'>
                                                {edu.period}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant='subtitle1'
                                                fontWeight='bold'>
                                                {edu.organization}
                                            </Typography>
                                            <Typography variant='body2'>
                                                {edu.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>

                            {/* Career */}
                            <Stack
                                direction='row'
                                alignItems='center'
                                spacing={1}
                                mb={1}>
                                <FaBuilding />
                                <Typography
                                    variant='h6'
                                    gutterBottom>
                                    Career
                                </Typography>
                            </Stack>
                            <Stack
                                spacing={1}
                                mb={2}>
                                {careers.map((career, idx) => (
                                    <Box
                                        key={idx}
                                        display='flex'
                                        alignItems='flex-start'>
                                        <Box minWidth={120}>
                                            <Typography
                                                variant='subtitle1'
                                                fontWeight='bold'
                                                color='primary'>
                                                {career.period}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant='subtitle1'
                                                fontWeight='bold'>
                                                {career.organization}
                                            </Typography>
                                            <Typography variant='body2'>
                                                {career.title}
                                            </Typography>
                                            {career.description && (
                                                <Typography
                                                    variant='body2'
                                                    color='text.secondary'>
                                                    {career.description}
                                                </Typography>
                                            )}
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </Box>
                </Stack>

                <Divider sx={{ my: 4 }} />

                {/* Certifications */}
                <Box mb={4}>
                    <Stack
                        direction='row'
                        alignItems='center'
                        spacing={1}
                        mb={1}>
                        <FaCertificate />
                        <Typography
                            variant='h6'
                            gutterBottom>
                            Certifications
                        </Typography>
                    </Stack>
                    <Grid
                        container
                        spacing={2}>
                        {about.certifications.map((cert, idx) => (
                            <Grid
                                size={{ xs: 12, sm: 6 }}
                                key={idx}>
                                <Card variant='outlined'>
                                    <CardContent>
                                        <Typography
                                            variant='subtitle1'
                                            fontWeight='bold'>
                                            {cert.name}
                                        </Typography>
                                        <Typography variant='body2'>
                                            {cert.organization} ({cert.period})
                                        </Typography>
                                        {cert.description && (
                                            <Typography
                                                variant='body2'
                                                color='text.secondary'>
                                                {cert.description}
                                            </Typography>
                                        )}
                                        {cert.link && (
                                            <Typography variant='body2'>
                                                <Link
                                                    href={cert.link}
                                                    target='_blank'
                                                    rel='noopener'
                                                    underline='hover'>
                                                    View Certificate
                                                </Link>
                                            </Typography>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Researches */}
                <Box mb={4}>
                    <Stack
                        direction='row'
                        alignItems='center'
                        spacing={1}
                        mb={1}>
                        <FaBook />
                        <Typography
                            variant='h6'
                            gutterBottom>
                            Researches
                        </Typography>
                    </Stack>
                    <Grid
                        container
                        spacing={2}>
                        {about.researches.map((res, idx) => (
                            <Grid
                                size={{ xs: 12, sm: 6 }}
                                key={idx}>
                                <Card variant='outlined'>
                                    <CardContent>
                                        <Typography
                                            variant='subtitle1'
                                            fontWeight='bold'>
                                            {res.title}
                                        </Typography>
                                        <Typography variant='body2'>
                                            {res.organization} ({res.period})
                                        </Typography>
                                        {res.description && (
                                            <Typography
                                                variant='body2'
                                                color='text.secondary'>
                                                {res.description}
                                            </Typography>
                                        )}
                                        {res.link && (
                                            <Typography variant='body2'>
                                                <Link
                                                    href={res.link}
                                                    target='_blank'
                                                    rel='noopener'
                                                    underline='hover'>
                                                    View Publication
                                                </Link>
                                            </Typography>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Template>
    );
};
