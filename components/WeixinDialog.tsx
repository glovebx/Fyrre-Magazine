"use client";

import React from 'react';
import { X } from "lucide-react";
import * as Dialog from '@radix-ui/react-dialog';

function WeixinDialogComponent({icon}: {icon: string}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        {/* <button>打开对话框</button> */}
        <img className="h-full w-fit cursor-pointer" src={icon}/>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay z-10 backdrop-blur fixed inset-0" />
        <Dialog.Content className="DialogContent fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-800 py-5 pl-5 pr-8 text-white rounded-md drop-shadow-xl">
          {/* <Dialog.Title className="DialogTitle">扫码关注微信</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            对话框内容
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className="DialogClose">关闭</button>
          </Dialog.Close> */}

          <div className='px-8'>
              <Dialog.Title className='font-bold text-xl text-center'>扫码关注微信</Dialog.Title>
              <Dialog.Description className="text-gray-300">
              <img className="h-full w-fit py-8" src="/images/homepage/contact-qr.png"/>
              </Dialog.Description>
          </div>
          
          <Dialog.Close asChild className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'>
          <X className="h-4 w-4 cursor-pointer" />
          {/* <span className="sr-only">Close</span> */}
          </Dialog.Close>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function WeixinDialog({icon}: {icon: string}) {
  return (
    <div>
      <WeixinDialogComponent icon={icon}/>
    </div>
  );
}

export default WeixinDialog;