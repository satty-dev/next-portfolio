// MUI
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';

// components
import { Template } from '@/components/layouts/Template';

// types
import { TAbout } from '@/types/index';

type TemplateAboutProps = {
    about: TAbout;
};

export const TemplateAbout = ({ about }: TemplateAboutProps) => {
    return (
        <Template>
            <Box className='container mx-auto py-[50px]'>
                <Typography
                    variant='h2'
                    gutterBottom>
                    About
                </Typography>
                <Typography
                    variant='h4'
                    gutterBottom
                    fontWeight='bold'>
                    {about.main_message}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        mb: 4,
                    }}>
                    <Avatar
                        alt={about.name}
                        src={about.image}
                        sx={{ width: 100, height: 100 }}
                    />
                    <Box>
                        <Typography variant='h6'>{about.name}</Typography>
                        <Typography variant='body1'>{about.bio}</Typography>
                    </Box>
                </Box>

                <Typography
                    variant='h6'
                    gutterBottom>
                    Skills
                </Typography>
                <Stack
                    direction='row'
                    spacing={1}
                    flexWrap='wrap'>
                    {about.skills.map((skill) => (
                        <Chip
                            key={skill}
                            label={skill}
                            color='primary'
                        />
                    ))}
                </Stack>
            </Box>
        </Template>
    );
};
