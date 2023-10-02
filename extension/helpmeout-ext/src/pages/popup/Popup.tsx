import React from 'react';
import logo from '@assets/img/logo.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mic, Monitor, Settings, Video, XCircle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

export default function Popup(): JSX.Element {
  return (
    <main className='p-6'>
      <Card className='w-full flex flex-col items-center shadow-sm rounded-xl'>
        <CardHeader className='text-center'>
          <div className='flex items-center justify-between'>
            <CardTitle className='flex items-center space-x-2'>
              <img src={logo} alt='Logo' className=' h-8 w-8' />
              <span className='font-bold text-xl text-primary'>
                Help Me Out
              </span>
            </CardTitle>
            <CardTitle className='flex items-center space-x-2 text-primary'>
              <Settings size={24} className='cursor-pointer text-primary' />
              <XCircle
                size={24}
                className='cursor-pointer text-muted-foreground hover:text-accent-foreground'
              />
            </CardTitle>
          </div>
          <CardDescription className='text-[#413C6D]'>
            This extension helps you record and share help videos with ease.
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-6 w-full'>
          <RadioGroup defaultValue='card' className='grid grid-cols-2 gap-4'>
            <div>
              <RadioGroupItem
                value='fullscreen'
                id='fullscreen'
                className='peer sr-only'
              />
              <Label
                htmlFor='fullscreen'
                className='flex flex-col items-center justify-between text-[#928FAB] font-semibold peer-data-[state=checked]:text-primary [&:has([data-state=checked])]:text-primary'
              >
                <Monitor className='mb-3 h-9 w-9' />
                <span className='text-md'>Full Screen</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value='currenttab'
                id='currenttab'
                className='peer sr-only'
              />
              <Label
                htmlFor='currenttab'
                className='flex flex-col items-center justify-between text-[#928FAB] font-semibold peer-data-[state=checked]:text-primary [&:has([data-state=checked])]:text-primary'
              >
                <Monitor className='mb-3 h-9 w-9' />
                <span className='text-md'>Current Tab</span>
              </Label>
            </div>
          </RadioGroup>
          <div className='flex items-center justify-between rounded-2xl p-4 transition-all border  border-primary text-primary'>
            <Label htmlFor='camera' className='flex items-center space-x-3'>
              <Video size={24} className='' />
              <span>Camera</span>
            </Label>
            <Switch id='camera' />
          </div>
          <div className='flex items-center justify-between rounded-2xl p-4 transition-all border  border-primary text-primary'>
            <Label htmlFor='audio' className='flex items-center space-x-3'>
              <Mic size={24} />
              <span>Audio</span>
            </Label>
            <Switch id='audio' />
          </div>
        </CardContent>
        <CardFooter className='w-full'>
          <Button
            // onClick={startRecording}
            className='w-full rounded-2xl p-6 bg-primary text-white hover:bg-primary/90  transition-all
          '
          >
            Start Recording
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
