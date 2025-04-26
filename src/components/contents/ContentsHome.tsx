// components
import { TemplateHome } from '@/components/templates/TemplateHome';

// types
import { THome } from '@/types/index';

// services
import { fetchApiFromServer } from '@/services/headers';

export const ContentsHome = async () => {
    const homeData = await fetchApiFromServer<THome>(`/home`);
    return <TemplateHome home={homeData} />;
};
