import { ReactNode } from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DashboardSidebar } from '@/components/navigations/DashboardSidebar';
import { DashboardMobileNav } from '@/components/navigations/DashboardMobileNav';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen bg-[#1B1D29] text-white flex'>
      <DashboardSidebar />

      <DashboardMobileNav />
      <main className='flex-1 overflow-y-auto'>
        <div className='flex items-center justify-between p-4 border-b border-[#2C2E3B]'>
          <div className='relative w-full max-w-md'>
            <Search className='absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-2 top-1/2' />
            <Input
              type='text'
              placeholder='Search here...'
              className='pl-8 bg-[#282A37] border-[#2C2E3B] rounded-md text-sm text-gray-300 w-full'
            />
          </div>
          <div className='flex items-center gap-4'>
            <Button variant='ghost' size='icon'>
              <Bell className='w-5 h-5 text-gray-400' />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  className='relative w-8 h-8 rounded-full'
                >
                  <Avatar className='h-8 w-8 border border-[#2C2E3B]'>
                    <AvatarImage src='/avatar.jpg' alt='User' />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align='end'
                className='bg-[#282A37] border-[#2C2E3B] text-white'
              >
                <DropdownMenuItem className='hover:bg-[#2C2E3B]'>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className='hover:bg-[#2C2E3B]'>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className='hover:bg-[#2C2E3B]'>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className='p-6'>{children}</div>
      </main>
    </div>
  );
};

export default RootLayout;
