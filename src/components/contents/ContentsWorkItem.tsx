// components
import { TemplateWorkItem } from '@/components/templates/TemplateWorkItem';

// types
import { TWork } from '@/types/index';

// services
import { fetchApiFromServer } from '@/services/headers';

type WorkItemPageParams = {
    paramsId: string;
};

export const ContentsWorkItem = async ({ paramsId }: WorkItemPageParams) => {
    const workData = await fetchApiFromServer<TWork>(`/works/${paramsId}`);
    return <TemplateWorkItem work={workData} />;
};
