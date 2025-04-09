// MUI
import Container from '@mui/material/Container';

// components
import { Header } from '@/components/Header';

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
            <footer></footer>
        </div>
    );
};
