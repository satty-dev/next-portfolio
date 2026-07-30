// types
import { TAbout } from '@/types/index';

export const dataAbout: TAbout = {
    main_message: 'Change what’s possible!',
    name: 'Sadahiro Suzuki (Satty)',
    job: 'UX Engineer',
    bio: 'I am committed to user-centered UX design and development. I continuously learn new technologies and methodologies to pursue better user experiences.',
    location: 'Tokyo, Japan',
    images: {
        photo: '/images/about/me.jpg',
        illust: '',
    },
    skills: [
        'Figma',
        'XD',
        'Photoshop',
        'Illustrator',
        'React',
        'Next.js',
        'TypeScript',
        'C#',
    ],

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
            description:
                'Joined the company to develop an EC (E-commerce) site and completed onboarding training.',
        },
        {
            type: 'career',
            organization: 'AtoJ Inc.',
            title: 'UX Engineer',
            period: '2022 - 2025',
            description:
                'Assigned after training to work on both engineering and UI/UX for EC (E-commerce) services. Also served as Scrum Master, leading the team through Scrum development.',
        },
        {
            type: 'career',
            organization: 'mercart Inc.',
            title: 'UX Engineer',
            period: '2025 - Present',
            description:
                'Joined this company following a corporate spin-off driven by service growth. As a design engineer, handled the full process from design through implementation and release.',
        },
    ],
    certifications: [
        {
            name: 'Fundamental Information Technology Engineer Examination',
            organization: 'IPA (Information-technology Promotion Agency, Japan)',
            period: '2021',
            description: 'National IT engineer qualification covering fundamental knowledge of programming, algorithms, and systems.',
            link: 'https://www.ipa.go.jp/shiken/kubun/fe.html',
        },
        {
            name: 'Google UX Design Professional Certificate',
            organization: 'Google',
            period: '2022',
            description: 'Google Certified UX Design Qualification',
            link: 'https://grow.google/certificates/ux-design/',
        },
        {
            name: 'Statistics Certification Test, Grade 3',
            organization: 'The Japan Statistical Society',
            period: '2026',
            description: 'Certification demonstrating foundational knowledge of statistics and data analysis.',
            link: 'https://www.toukei-kentei.jp/',
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
