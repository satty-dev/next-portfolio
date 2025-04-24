import { notFound } from 'next/navigation';

// components
import { TemplateWorkItem } from '@/components/templates/TemplateWorkItem';

type WorkItemPageParams = {
    paramsId: string;
};

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

export const ContentsWorkItem = async ({ paramsId }: WorkItemPageParams) => {
    const workData = await getWorkData(paramsId, 1000);

    if (!workData) {
        notFound();
    }

    return <TemplateWorkItem work={workData} />;
};
