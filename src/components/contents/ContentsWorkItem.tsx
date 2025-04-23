import { notFound } from 'next/navigation';

// components
import { TemplateWorkItem } from '@/components/templates/TemplateWorkItem';

const getWorkData = async (id: string, waitTime: number) => {
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    const res = await fetch(`http://localhost:3000/api/works/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        console.log('Work not found');
        return null;
    }

    const workData = await res.json();
    return workData;
};

type ContentsWorkDetailProps = {
    id: string;
};

export const ContentsWorkItem = async ({ id }: ContentsWorkDetailProps) => {
    const workData = await getWorkData(id, 1000);

    if (!workData) {
        notFound();
    }

    return <TemplateWorkItem work={workData} />;
};
