import { useState, useEffect, useRef } from 'react';

export default function useDrawerVisible() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setOpenDrawer(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, openDrawer, setOpenDrawer };
}