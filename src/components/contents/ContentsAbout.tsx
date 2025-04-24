// components
import { TemplateAbout } from '@/components/templates/TemplateAbout';

const getAboutData = async (waitTime: number) => {
    //ルーディング画面がわかりやすくするために処理
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    const res = await fetch('http://localhost:3000/api/about', {
        cache: 'no-store',
    });

    const AboutData = await res.json();

    return AboutData;
};

export const ContentsAbout = async () => {
    const aboutData = await getAboutData(1000);

    return <TemplateAbout about={aboutData} />;
};
