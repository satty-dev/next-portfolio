'use client';

import { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Stack,
    Button,
    ButtonGroup,
    CircularProgress,
} from '@mui/material';
import { Template } from '@/components/layouts/Template';
import { PageTitle } from '@/components/materials/PageTitle';
import { TQuote } from '@/types/index';

type TemplateQuotesProps = {
    quotes: TQuote[];
};

export const TemplateQuotes = ({ quotes }: TemplateQuotesProps) => {
    const [mode, setMode] = useState<'all' | 'random'>('random');
    const [randomQuote, setRandomQuote] = useState<TQuote | null>(null);
    const [loading, setLoading] = useState(false);

    // 初期ランダムクォートを取得
    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/quotes/random');
            const quote = await response.json();
            setRandomQuote(quote);
        } catch (error) {
            console.error('Failed to fetch random quote:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRandomClick = () => {
        setMode('random');
    };

    const handleShowAllClick = () => {
        setMode('all');
    };

    const handleGenerateNewQuote = () => {
        fetchRandomQuote();
    };

    return (
        <Template>
            <Box className='container mx-auto py-[50px]'>
                <PageTitle title='Quotes on Design' />
                <Box
                    sx={{
                        maxWidth: 'md',
                        mx: 'auto',
                        mt: 6,
                        px: { xs: 2, md: 0 },
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mb: 4,
                            minHeight: '56px',
                            alignItems: 'center',
                        }}>
                        <ButtonGroup
                            variant='outlined'
                            aria-label='quote display mode'>
                            <Button
                                onClick={handleRandomClick}
                                variant={
                                    mode === 'random' ? 'contained' : 'outlined'
                                }
                                sx={{ minWidth: 100, height: '40px' }}>
                                Random
                            </Button>
                            <Button
                                onClick={handleShowAllClick}
                                variant={
                                    mode === 'all' ? 'contained' : 'outlined'
                                }
                                sx={{ minWidth: 100, height: '40px' }}>
                                All Quotes
                            </Button>
                        </ButtonGroup>
                    </Box>

                    <Box sx={{ minHeight: '400px' }}>
                        {mode === 'all' ? (
                            <Stack spacing={4}>
                                {quotes.map((quote) => (
                                    <Card key={quote.id}>
                                        <CardContent>
                                            <Typography variant='h6'>
                                                {quote.quote}
                                            </Typography>
                                            <Typography
                                                variant='body2'
                                                color='text.secondary'>
                                                - {quote.author}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Stack>
                        ) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}>
                                {randomQuote ? (
                                    <Box sx={{ width: '100%' }}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                mb: 3,
                                            }}>
                                            <Button
                                                onClick={handleGenerateNewQuote}
                                                variant='outlined'
                                                disabled={loading}
                                                sx={{
                                                    minWidth: 120,
                                                    height: '40px',
                                                }}>
                                                {loading ? (
                                                    <CircularProgress
                                                        size={20}
                                                    />
                                                ) : (
                                                    'New Quote'
                                                )}
                                            </Button>
                                        </Box>
                                        <Card sx={{ minWidth: '100%' }}>
                                            <CardContent
                                                sx={{
                                                    textAlign: 'center',
                                                    py: 6,
                                                }}>
                                                <Typography
                                                    variant='h4'
                                                    gutterBottom
                                                    sx={{ mb: 3 }}>
                                                    &ldquo;{randomQuote.quote}
                                                    &rdquo;
                                                </Typography>
                                                <Typography
                                                    variant='h6'
                                                    color='text.secondary'>
                                                    - {randomQuote.author}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ) : loading ? (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            py: 8,
                                        }}>
                                        <CircularProgress />
                                    </Box>
                                ) : null}
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </Template>
    );
};
