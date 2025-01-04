'use client';

import menuIcon from '@/app/shared/assets/menu_icon.png';
import Image from 'next/image';

type MenuIconProps = {
  onClick: React.MouseEventHandler<HTMLElement>;
}

export default function MenuIcon({onClick}: MenuIconProps) {
  return (
    <div className="inline-block p-2 cursor-pointer" onClick={onClick}>
        <Image
          width={24}
          src={menuIcon}
          alt="Menu icon"
        />
    </div>
  );
}