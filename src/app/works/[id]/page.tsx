// types
import { WorkItemPageParams } from '@/types/index';

// components
import { ContentsWorkItem } from '@/components/contents/ContentsWorkItem';

export default async function WorkItemPage({ params }: WorkItemPageParams) {
    const p = await params;
    return <ContentsWorkItem params={p} />;
}
