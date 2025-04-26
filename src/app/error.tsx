'use client';

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // エラーをログに記録したり、監視ツールに送信したりする処理
        console.error('エラーが発生しました:', error);
    }, [error]);

    return (
        <Box className='container mx-auto py-[50px] text-center'>
            <Typography
                variant='h3'
                fontWeight='bold'
                gutterBottom>
                500 - サーバーエラー
            </Typography>
            <Typography
                variant='body1'
                gutterBottom>
                サーバーで予期しないエラーが発生しました。しばらくしてから再度お試しください。
            </Typography>
            <Typography
                variant='body2'
                color='text.secondary'
                textAlign='left'
                gutterBottom>
                {process.env.NODE_ENV === 'development' && error.stack}
            </Typography>
            <Button
                variant='contained'
                color='primary'
                onClick={() => reset()}
                sx={{ mt: 4, mr: 2 }}>
                再試行
            </Button>
            <Button
                variant='outlined'
                component={Link}
                href='/'
                sx={{ mt: 4 }}>
                TOPに戻る
            </Button>
        </Box>
    );
}
