// MUI
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Box className='container mx-auto py-[50px] text-center'>
            <Typography
                variant='h3'
                fontWeight='bold'
                gutterBottom>
                404 - ページが見つかりません
            </Typography>
            <Typography
                variant='body1'
                gutterBottom>
                お探しの実績は存在しないか、削除された可能性があります。
            </Typography>
            <Button
                variant='contained'
                color='primary'
                component={Link}
                href='/'
                sx={{ mt: 4 }}>
                TOPに戻る
            </Button>
        </Box>
    );
}
