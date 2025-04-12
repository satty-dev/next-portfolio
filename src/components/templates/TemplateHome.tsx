// components
import { Template } from '@/components/layouts/Template';
import { RotatingTitleMessage } from '@/components/materials/RotatingTitleMessage';

// types
import { THome } from '@/types/index';

type TemplateHomeProps = {
    home: THome;
};

export const TemplateHome = (props: TemplateHomeProps) => {
    const { home } = props;
    return (
        <Template>
            <RotatingTitleMessage
                fixedText={home.rotating_message.fixed_text}
                rotatingText={home.rotating_message.rotating_text_arry}
                className='my-2'
            />
            <div>{home.title}</div>
            <div>{home.main_image}</div>
            <div>{home.sub_message}</div>
            <div>{home.description}</div>
        </Template>
    );
};
