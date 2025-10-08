// MUI
import { Box, Grid } from '@mui/material';

// components
import { Template } from '@/components/layouts/Template';
import { PageTitle } from '@/components/materials/PageTitle';
import { MediaCard } from '@/components/materials/MediaCaed';

// types
import { TWork } from '@/types/index';

type TemplateWorkListProps = {
    workList: TWork[];
};

export const TemplateWorkList = (props: TemplateWorkListProps) => {
    const { workList } = props;
    return (
        <Template>
            <Box className='container mx-auto py-[10px]'>
                <PageTitle title='Works' />
                <Grid
                    container
                    spacing={2}>
                    {workList.map((work) => {
                        return (
                            <Grid
                                key={work.id}
                                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <MediaCard work={work} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Template>
    );
};
