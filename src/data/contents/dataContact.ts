// types
import { TContact } from '@/types/index';

export const dataContact: TContact = {
    actionUrl:
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdz6y_JqrePhXjq9361EEMvn5rFpkAa5-su8vY0V4OKS3qNuQ/formResponse',
    items: [
        {
            name: 'entry.698923667',
            label: 'Name',
            required: true,
            type: 'text',
        },
        {
            name: 'entry.1636299616',
            label: 'Email',
            required: true,
            type: 'email',
        },
        {
            name: 'entry.633009432',
            label: 'Subject',
            required: true,
            type: 'text',
        },
        {
            name: 'entry.664301335',
            label: 'Message',
            required: true,
            type: 'textarea',
        },
    ],
};
