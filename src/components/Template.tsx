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
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};
