// components
import { TemplateQuotes } from '@/components/templates/TemplateQuotes';

// types
import { TQuote } from '@/types/index';

// services
import { fetchApiFromServer } from '@/services/headers';

export const ContentsQuotes = async () => {
    const dataQuotes = await fetchApiFromServer<TQuote[]>(`/quotes`);
    return <TemplateQuotes quotes={dataQuotes} />;
};
