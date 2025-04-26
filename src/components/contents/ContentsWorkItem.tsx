// components
import { TemplateWorkItem } from '@/components/templates/TemplateWorkItem';

// types
import { TWork } from '@/types/index';

// services
import { fetchJson } from '@/services/fetcher';

type WorkItemPageParams = {
    paramsId: string;
};

export const ContentsWorkItem = async ({ paramsId }: WorkItemPageParams) => {
    const workData = await fetchJson<TWork>(`/works/${paramsId}`);
    return <TemplateWorkItem work={workData} />;
};
