// components
import { TemplateWorkList } from '@/components/templates/TemplateWorkList';

const getWorkItemData = async (waitTime: number) => {
    //ルーディング画面がわかりやすくするために処理
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    const res = await fetch('http://localhost:3000/api/works', {
        cache: 'no-store',
    });

    const workItemData = await res.json();

    return workItemData;
};

export const ContentsWorkItem = async () => {
    const workItemData = await getWorkItemData(1000);

    return <TemplateWorkList workList={workItemData} />;
};
