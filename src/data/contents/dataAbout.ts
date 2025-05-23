// types
import { TAbout } from '@/types/index';

export const dataAbout: TAbout = {
    main_message: 'Passion Fuels Purpose!',
    name: 'Sadahiro Suzuki (Satty)',
    job: 'UX Engineer',
    bio: 'I am committed to user-centered UX design and development. I continuously learn new technologies and methodologies to pursue better user experiences.',
    images: {
        photo: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
        illust: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp',
    },
    skills: ['Figma', 'React', 'TypeScript', 'MUI'],
    histories: [
        {
            type: 'education',
            organization: 'Future University Hakodate',
            title: "Bachelor's in Systems Information Science",
            period: '2016 - 2020',
        },
        {
            type: 'education',
            organization: 'Graduate School of Future University Hakodate',
            title: "Master's in Systems Information Science",
            period: '2020 - 2022',
        },
        {
            type: 'career',
            organization: 'Softcreate Holdings',
            title: 'Software Engineer',
            period: '2022 - 2022',
            description: 'Engaged in EC (E-commerce) development.',
        },
        {
            type: 'career',
            organization: 'AtoJ Inc.',
            title: 'UX Engineer',
            period: '2022 - Present',
            description:
                'Engaged in UI/UX design, development, and design for EC (E-commerce) services.',
        },
    ],
    certifications: [
        {
            name: 'Google UX Design Professional Certificate',
            organization: 'Google',
            period: '2022',
            description: 'Google Certified UX Design Qualification',
            link: 'https://grow.google/certificates/ux-design/',
        },
    ],
    researches: [
        {
            title: 'Proposal of Kansei Communication Tool for SNS Based on Combining Verbal and Non-verbal Communication.',
            organization: 'Springer Nature',
            period: '2020',
            description:
                'This research proposes a new communication tool for social networking services that combines verbal and non-verbal communication methods to enhance emotional expression and user interaction.',
            link: 'https://link.springer.com/chapter/10.1007/978-3-030-51194-4_92',
        },
        {
            title: 'Evaluation and Analysis of How to Remove Ads Based on Ad Avoidance.',
            organization: 'Springer Nature',
            period: '2021',
            description:
                'This study investigates the effectiveness of various methods for ad removal and analyzes user behavior related to ad avoidance in digital environments.',
            link: 'https://link.springer.com/chapter/10.1007/978-3-030-80829-7_118',
        },
    ],
};
