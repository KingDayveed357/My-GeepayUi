"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';


const ThemeSwitcher = () => {
 const [mounted, setMounted] = useState(false);
 const {theme, setTheme} = useTheme();

 useEffect(() => setMounted(true), [])
 return { theme, setTheme };
}

export default ThemeSwitcher
