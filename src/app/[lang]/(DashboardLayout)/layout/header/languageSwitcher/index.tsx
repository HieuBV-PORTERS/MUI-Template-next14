import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { Button, Menu, MenuItem } from '@mui/material';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import React, { ChangeEvent, useState, useTransition } from 'react'

const LanguageSwitcher = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const open = Boolean(anchorEl);
    const router = useRouter()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(event: Locale) {
        const nextLocale = event;
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }


    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {locale}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => onSelectChange('en')}>English</MenuItem>
                <MenuItem onClick={() => onSelectChange('vi')}>Viet Nam</MenuItem>
                <MenuItem onClick={() => onSelectChange('jp')}>Japanese</MenuItem>
            </Menu>
        </div>
    );
}

export default LanguageSwitcher