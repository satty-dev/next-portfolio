// MUI
import { Box, Container } from '@mui/material';

// components
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';

type Template = {
    children: React.ReactNode;
};

export const Template = (props: Template) => {
    const { children } = props;
    const headerHeight: number = 64;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
                }}>
                <Header />
            </Box>
            <Container
                component='main'
                maxWidth='lg'
                sx={{
                    flexGrow: 1,
                    mt: `${headerHeight}px`,
                    py: 4,
                }}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
};
