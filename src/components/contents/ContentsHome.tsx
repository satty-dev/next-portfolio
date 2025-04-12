// components
import { TemplateHome } from '@/components/templates/TemplateHome';

const getHomeData = async (waitTime: number) => {
    //ルーディング画面がわかりやすくするために処理
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    const res = await fetch('http://localhost:3000/api/works', {
        cache: 'no-store',
    });

    const HomeData = await res.json();

    return HomeData;
};

export const ContentsHome = async () => {
    const worksData = await getHomeData(1000);

    return <TemplateHome works={worksData} />;
};
