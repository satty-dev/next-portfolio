// MUI
import Typography from '@mui/material/Typography';

// components
import { Template } from '@/components/layouts/Template';
import { RotatingTitleMessage } from '@/components/materials/RotatingTitleMessage';

// reactbits
import RotatingText from '@/components/reactbits/RotatingText';
import Ballpit from '@/components/reactbits/Ballpit';

// types
import { THome } from '@/types/index';

type TemplateHomeProps = {
    home: THome;
};

export const TemplateHome = (props: TemplateHomeProps) => {
    const { home } = props;
    return (
        <Template>
            <div
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '500px',
                    maxHeight: '500px',
                    width: '100%',
                }}>
                <Ballpit
                    count={80}
                    gravity={0.5}
                    friction={0.9}
                    wallBounce={0.95}
                    followCursor={false}
                    color={[1, 1, 1]}
                    ambientColor={16777215}
                    ambientIntensity={1}
                    lightIntensity={200}
                />
            </div>
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
