// components
import { TemplateHome } from '@/components/templates/TemplateHome';

// types
import { THome, TWork, TAbout } from '@/types/index';

// services
import { fetchApiFromServer } from '@/services/headers';

export const ContentsHome = async () => {
    const [homeData, worksData, aboutData] = await Promise.all([
        fetchApiFromServer<THome>(`/home`),
        fetchApiFromServer<TWork[]>(`/works`),
        fetchApiFromServer<TAbout>(`/about`),
    ]);
    return (
        <TemplateHome
            home={homeData}
            works={worksData}
            about={aboutData}
        />
    );
};
