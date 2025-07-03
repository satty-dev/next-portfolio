'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

// MUI
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
    Stack,
    InputAdornment,
} from '@mui/material';

// icons
import { MdEmail, MdSubject, MdMessage } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

// components
import { Template } from '@/components/layouts/Template';
import { PageTitle } from '@/components/materials/PageTitle';

// types
import { TContact } from '@/types/index';

type TemplateContactProps = {
    contact: TContact;
};

export const TemplateContact = ({ contact }: TemplateContactProps) => {
    const [form, setForm] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        contact.items.forEach((item) => {
            formData.append(item.name, form[item.name] || '');
        });

        try {
            await fetch(contact.actionUrl, {
                method: 'POST',
                body: formData,
                mode: 'no-cors',
            });
            setSubmitted(true);
        } catch (err) {
            console.error('Submission failed:', err);
            alert('Submission failed. Please try again later.');
        }
    };

    const getIcon = (name: string) => {
        if (name.includes('name')) return <FaUser />;
        if (name.includes('email')) return <MdEmail />;
        if (name.includes('subject')) return <MdSubject />;
        if (name.includes('message')) return <MdMessage />;
        return null;
    };

    return (
        <Template>
            <Box className='container mx-auto py-[50px]'>
                <PageTitle title='Contact' />
                <Container
                    maxWidth='sm'
                    sx={{ py: 6 }}>
                    {submitted ? (
                        <>
                            <Typography
                                variant='h5'
                                gutterBottom>
                                🚀 Message sent into the void!
                            </Typography>
                            <Typography>
                                Just kidding — we got it. Our inbox gnomes are
                                already sorting it out. Expect a reply soon!
                            </Typography>
                            <Box
                                display='flex'
                                justifyContent='center'
                                mt={4}
                                mb={2}>
                                <Link
                                    href='/'
                                    passHref>
                                    <Button
                                        variant='outlined'
                                        color='primary'
                                        size='large'>
                                        Back to Home
                                    </Button>
                                </Link>
                            </Box>
                        </>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={4}>
                                {contact.items.map((item) => (
                                    <TextField
                                        key={item.name}
                                        name={item.name}
                                        label={item.label}
                                        required={item.required}
                                        type={
                                            item.type === 'textarea'
                                                ? undefined
                                                : item.type
                                        }
                                        multiline={item.type === 'textarea'}
                                        rows={
                                            item.type === 'textarea'
                                                ? 5
                                                : undefined
                                        }
                                        value={form[item.name] || ''}
                                        onChange={handleChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start'>
                                                    {getIcon(item.name)}
                                                </InputAdornment>
                                            ),
                                        }}
                                        fullWidth
                                    />
                                ))}
                                <Box textAlign='center'>
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        color='primary'>
                                        送信
                                    </Button>
                                </Box>
                            </Stack>
                        </form>
                    )}
                </Container>
            </Box>
        </Template>
    );
};
