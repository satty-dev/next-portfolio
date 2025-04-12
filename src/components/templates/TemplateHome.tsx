// MUI
import Grid from '@mui/material/Grid';

// components
import { Template } from '@/components/layouts/Template';
import { MediaCard } from '@/components/materials/MediaCaed';

// types
import { THome } from '@/types/index';

type TemplateHomeProps = {
    home: THome;
};

export const TemplateHome = (props: TemplateHomeProps) => {
    const { home } = props;
    return (
        <Template>
            <div>{home.title}</div>
            <div>{home.main_image}</div>
            <div>{home.sub_message}</div>
            <div>{home.description}</div>
        </Template>
    );
};
