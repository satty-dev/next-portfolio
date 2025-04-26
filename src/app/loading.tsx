// MUI
import { CircularProgress, Box, Typography } from '@mui/material';

export default function Loading() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                gap: 2,
            }}>
            <CircularProgress />
            <Typography
                variant='subtitle1'
                color='text.secondary'>
                Loading my awesome-ness...
            </Typography>
        </Box>
    );
}
