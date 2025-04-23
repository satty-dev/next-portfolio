// components
import { ContentsWorkItem } from '@/components/contents/ContentsWorkItem';

type Props = {
    params: {
        id: string;
    };
};

export default async function WorkItemPage({ params }: Props) {
    return <ContentsWorkItem id={params.id} />;
}
