export type Props = {
    params: Promise<{
        id: string;
    }>;
};

export interface THome {
    title: string;
    main_message: string;
    sub_message: string;
    description: string;
    main_image: string;
    link: string;
    rotating_message: {
        fixed_text: string;
        rotating_text_arry: string[];
    };
}

export interface TAbout {
    main_message: string;
    name: string;
    job: string;
    bio: string;
    location: string;
    images: {
        photo: string;
        illust: string;
    };
    skills: string[];
    histories: {
        type: 'education' | 'career';
        organization: string;
        title: string;
        period: string;
        description?: string;
    }[];
    certifications: {
        name: string;
        organization: string;
        period: string;
        description?: string;
        link?: string;
    }[];
    researches: {
        title: string;
        organization: string;
        period: string;
        description?: string;
        link?: string;
    }[];
}

export interface TWork {
    id: string;
    title: string;
    summary: string;
    description: string;
    image: string;
    skills: string[];
    link: string;
}

export interface TContactItem {
    name: string;
    label: string;
    required: boolean;
    type: 'text' | 'email' | 'textarea';
}

export interface TContact {
    actionUrl: string;
    items: TContactItem[];
}
