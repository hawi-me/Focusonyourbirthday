import './globals.css'
import { ReactNode } from 'react'


export const metadata = {
title: 'Focus On Your Birthday',
description: 'Lock in your birthday perks at Focus',
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body>
{children}
</body>
</html>
)
}