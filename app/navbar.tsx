import my_styles from './mystyles.module.css';
import Link from 'next/link';
import Link_Class from '@/class/link_class';

export default function Navbar() {

  var options = [];
  options.push(new Link_Class('Home','/'));
  options.push(new Link_Class('Chronometer','chronometer'));
  options.push(new Link_Class('Lottery','lottery'));

  return (
    <div className={my_styles.navbar}>
      { options.map(
        (option)=>
        <Link href={option.direction} className={my_styles.option} key = {option.option}> 
          {option.option}
        </Link>
        )
      }
    </div>
  );
}
