// types
import { WorkItemPageParams } from '@/types/index';

// components
import { ContentsWorkItem } from '@/components/contents/ContentsWorkItem';

export default async function WorkItemPage({ params }: WorkItemPageParams) {
    return <ContentsWorkItem id={params.id} />;
}
