// components
import { TemplateWorkList } from '@/components/templates/TemplateWorkList';

const getWorkListData = async (waitTime: number) => {
    //ルーディング画面がわかりやすくするために処理
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    const res = await fetch('http://localhost:3000/api/works', {
        cache: 'no-store',
    });

    const workListData = await res.json();

    return workListData;
};

export const ContentsWorkList = async () => {
    const workListData = await getWorkListData(1000);

    return <TemplateWorkList workList={workListData} />;
};
