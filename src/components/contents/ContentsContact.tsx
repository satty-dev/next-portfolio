// components
import { TemplateContact } from '@/components/templates/TemplateContact';

// types
import { TContact } from '@/types/index';

// services
import { fetchApiFromServer } from '@/services/headers';

export const ContentsContact = async () => {
    const contactData = await fetchApiFromServer<TContact>(`/contact`);
    return <TemplateContact contact={contactData} />;
};
