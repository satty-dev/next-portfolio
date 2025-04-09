// components
import { TemplateWorks } from '@/components/templates/TemplateWorks';

const getWorksData = async (waitTime: number) => {
    //ルーディング画面がわかりやすくするために処理
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    const res = await fetch('http://localhost:3000/api/works', {
        cache: 'no-store',
    });

    const worksData = await res.json();

    return worksData;
};

export const ContentsWorks = async () => {
    const worksData = await getWorksData(1000);

    return <TemplateWorks works={worksData} />;
};
