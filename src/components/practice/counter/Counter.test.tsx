import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Counter } from '@/components/practice/counter/Counter';

describe('Counter Test', () => {
    test('Counter Test 1', () => {
        render(<Counter />);
        const button = screen.getByRole('button', {name: '＋'})
        expect(button).toBeVisible();
    });
});
