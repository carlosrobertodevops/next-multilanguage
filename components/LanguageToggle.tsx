'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Link, usePathname, useRouter } from '@/navigation';
import { Languages } from 'lucide-react';
import React from 'react';

const LanguageToggle: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href={pathname} locale="en">
          <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
        </Link>
        <Link href={pathname} locale="pt">
          <DropdownMenuItem> 🇧🇷 Portugues</DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'en' })}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(pathname, { locale: 'pt' })}
        >
          Portugues
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
