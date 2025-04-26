// components
import { TemplateHome } from '@/components/templates/TemplateHome';

// types
import { THome } from '@/types/index';

// services
import { fetchJson } from '@/services/fetcher';

export const ContentsHome = async () => {
    const homeData = await fetchJson<THome>(`/home`);
    return <TemplateHome home={homeData} />;
};
