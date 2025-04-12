export interface THome {
    title: string;
    main_message: string;
    sub_message: string;
    description: string;
    main_image: string;
    link: string;
    rotating_message: {
        fixed_text: string,
        rotating_text_arry: string[],
    }
}

export interface TWork {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}
