import type { Metadata } from 'next';
import './globals.css';
const title = 'Eden Cities — A garden where wisdom grows';
const description = 'Experiences Designed to Enrich and Nourish. One membership. Global access. Discover culture, creativity, wellness, work, and learning for $1,000 per month.';
export const metadata: Metadata = {
  metadataBase: new URL('https://eden-cities.tadetuyi.chatgpt.site'),
  title, description,
  openGraph: { title, description, url: 'https://eden-cities.tadetuyi.chatgpt.site', siteName: 'Eden Cities', type: 'website', images: [{url: '/og.png', alt: 'Eden Cities — A garden where wisdom grows'}] },
  twitter: {card: 'summary_large_image', title, description, images: ['/og.png']},
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
