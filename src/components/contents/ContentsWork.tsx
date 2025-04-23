// components
import { TemplateWorks } from '@/components/templates/TemplateWorks';

const getWorkData = async (waitTime: number) => {
    //ルーディング画面がわかりやすくするために処理
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    const res = await fetch('http://localhost:3000/api/works', {
        cache: 'no-store',
    });

    const workData = await res.json();

    return workData;
};

export const ContentsWork = async () => {
    const worksData = await getWorkData(1000);

    return <TemplateWorks works={worksData} />;
};
