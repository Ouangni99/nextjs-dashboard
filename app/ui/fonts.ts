// Import inter font from @next/font/google
import { Inter , Lusitana} from 'next/font/google';
 
// Exporting subsets font
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({weight: ['400', '700'],subsets: ['latin'],});