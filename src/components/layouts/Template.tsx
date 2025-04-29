// MUI
import Container from '@mui/material/Container';

// components
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer'; 

type Template = {
    children: React.ReactNode;
};

export const Template = (props: Template) => {
    const { children } = props;

    return (
        <div>
            <Header />
            <Container maxWidth='lg'>
                <main>{children}</main>
            </Container>
            <Footer />
        </div>
    );
};
