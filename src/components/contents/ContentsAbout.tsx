// components
import { TemplateAbout } from '@/components/templates/TemplateAbout';

// types
import { TAbout } from '@/types/index';

// services
import { fetchJson } from '@/services/fetcher';

export const ContentsAbout = async () => {
    const aboutData = await fetchJson<TAbout>(`/about`);
    return <TemplateAbout about={aboutData} />;
};
