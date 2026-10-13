import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Lilla Vrencian | Software Developer', description: 'Software developer in Brașov, Romania. Explore my work in JavaScript, Angular, C#, .NET, and interactive puzzle applications.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {return <html lang="en" data-theme="sunset"><body>{children}</body></html>}
