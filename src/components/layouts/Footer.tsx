'use client';

import * as React from 'react';

// MUI
import { Box, Container, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <Box
            component='footer'
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: 4,
                bgcolor: (theme) => theme.palette.background.default,
            }}>
            <Container maxWidth='lg'>
                <Typography
                    variant='body2'
                    color='text.secondary'
                    align='center'>
                    © {new Date().getFullYear()} Satty Portfolio. All rights
                    reserved.
                </Typography>
            </Container>
        </Box>
    );
};
