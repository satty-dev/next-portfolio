// components
import { TemplateAbout } from '@/components/templates/TemplateAbout';

// types
import { TAbout } from '@/types/index';

// services
import { fetchApiFromServer } from '@/services/headers';

export const ContentsAbout = async () => {
    const aboutData = await fetchApiFromServer<TAbout>(`/about`);
    return <TemplateAbout about={aboutData} />;
};
