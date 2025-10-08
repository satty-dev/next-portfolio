'use client';

import { Box, Typography, Card, CardContent, Stack } from '@mui/material';
import { Template } from '@/components/layouts/Template';
import { PageTitle } from '@/components/materials/PageTitle';
import { TQuote } from '@/types/index';

type TemplateQuotesProps = {
    quotes: TQuote[];
};

export const TemplateQuotes = ({ quotes }: TemplateQuotesProps) => {
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
                </Box>
            </Box>
        </Template>
    );
};
