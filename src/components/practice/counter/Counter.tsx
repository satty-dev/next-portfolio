'use client';

import React, { useState, useCallback, useRef, useMemo } from 'react';

// MUI
import { Box, Button, Typography, Popover } from '@mui/material';

/** 今日の日付を取得（1〜31） */
const getTodayDate = (): number => new Date().getDate();

/** Satty(1997年8月14日生まれ)の現在の年齢を返す */
const getCurrentAge = (): number => {
    // 月は0始まりなので7は8月
    const birthDate = new Date(1997, 7, 14);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    // 誕生日を迎えていない場合は年齢を1引く
    const hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
            today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
        age -= 1;
    }

    return age;
};

/**
 * 特定のカウントに対応するメッセージを返す関数
 * 特別メッセージは通常メッセージよりも優先される
 */
const getMessageForCount = (count: number): string | null => {
    // 通常メッセージ
    const messages: Record<number, string> = {
        3: '3回目だよ！',
        8: '🎉 Sattyの誕生日の月！',
        10: '🚀 10回達成！すごい！',
        14: '🎂 Sattyの誕生日の日付！',
    };

    const today = getTodayDate();
    const age = getCurrentAge();

    // 特別メッセージ：今日と同じ数値
    if (count === today) {
        return `今日は${today}日！ぴったりだね🎯`;
    }

    // 特別メッセージ：Sattyの年齢
    if (count === age) {
        return `Sattyの年齢と同じ${age}になったよ🙋‍♂️`;
    }

    return messages[count] ?? null;
};

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState<string | null>(null);

    // 数値表示部分への参照（吹き出しの位置指定に使う）
    const countRef = useRef<HTMLSpanElement | null>(null);

    const updateCount = useCallback((newCount: number) => {
        setCount(newCount);
        setMessage(getMessageForCount(newCount));
    }, []);

    const handleIncrement = () => updateCount(count + 1);
    const handleDecrement = () => updateCount(count - 1);
    const handleReset = () => updateCount(0);

    const popoverOpen = useMemo(
        () => Boolean(countRef.current && message),
        [message],
    );

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap={2}
            mt={4}>
            <Popover
                open={popoverOpen}
                anchorEl={countRef.current}
                onClose={() => setMessage(null)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Box p={2}>
                    <Typography
                        color='primary'
                        fontWeight='bold'>
                        {message}
                    </Typography>
                </Box>
            </Popover>
            <Typography
                variant='h4'
                fontWeight='bold'>
                <span ref={countRef}>{count}</span>
            </Typography>
            <Box
                display='flex'
                gap={2}>
                <Button
                    variant='outlined'
                    onClick={handleDecrement}>
                    −
                </Button>
                <Button
                    variant='outlined'
                    onClick={handleIncrement}>
                    ＋
                </Button>
            </Box>
            <Button
                variant='text'
                color='secondary'
                onClick={handleReset}>
                RESET
            </Button>
        </Box>
    );
};
