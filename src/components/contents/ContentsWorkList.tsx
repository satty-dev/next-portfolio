// components
import { TemplateWorkList } from '@/components/templates/TemplateWorkList';

// types
import { TWork } from '@/types/index';

// services
import { fetchApiFromServer } from '@/services/headers';

export const ContentsWorkList = async () => {
    const workListData = await fetchApiFromServer<TWork[]>(`/works`);
    return <TemplateWorkList workList={workListData} />;
};
