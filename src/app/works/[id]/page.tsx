// types
import { Props } from '@/types/index';

// components
import { ContentsWorkItem } from '@/components/contents/ContentsWorkItem';

export default async function WorkItemPage({ params }: Props) {
    const pramsId = (await params).id;
    return <ContentsWorkItem paramsId={pramsId} />;
}
