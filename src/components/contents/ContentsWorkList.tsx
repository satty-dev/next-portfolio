// components
import { TemplateWorkList } from '@/components/templates/TemplateWorkList';

// types
import { TWork } from '@/types/index';

// services
import { fetchJson } from '@/services/fetcher';

export const ContentsWorkList = async () => {
    const workListData = await fetchJson<TWork[]>(`/works`);
    return <TemplateWorkList workList={workListData} />;
};
