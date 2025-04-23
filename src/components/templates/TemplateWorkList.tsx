// MUI
import Grid from '@mui/material/Grid';

// components
import { Template } from '@/components/layouts/Template';
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
            <div className='container mx-auto py-[50px]'>
                <h2 className='mb-5 text-[50px] font-bold'>Works</h2>
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
            </div>
        </Template>
    );
};
