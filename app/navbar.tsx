'use client';

import my_styles from './home.module.css';
import Link from 'next/link';
import Link_Class from '@/app/public/classes/link_class';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

export default function Navbar() {

  var options = [];
  options.push(new Link_Class('Home','/',''));
  options.push(new Link_Class('Chronometer','/chronometer',''));
  options.push(new Link_Class('Lottery','/lottery',''));
  options.push(new Link_Class('ChatGPT','/chatgpt',''));

  const direction = usePathname();

  return (
    <div className={my_styles.navbar}>
      { options.map(
        (option)=>
        <Link href={option.direction} className={clsx({[my_styles.active_option]:option.direction==direction,[my_styles.option]:option.direction!=direction})} key = {option.option}> 
          {option.option}
        </Link>
        )
      }
    </div>
  );
}
