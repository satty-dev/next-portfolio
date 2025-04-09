import Link from 'next/link';

// components
import { Template } from '@/components/layouts/Template';

export default function Home() {
    return (
        <Template>
            Hello World!
            <ul>
                <li>
                    <Link href={{ pathname: '/works' }}>works</Link>
                </li>
                <li>
                    {' '}
                    <Link href={{ pathname: '/blog' }}>blog</Link>
                </li>
            </ul>
        </Template>
    );
}
