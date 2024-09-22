import my_styles from './mystyles.module.css';
import Link from 'next/link';

export default function Navbar() {

  const options = ['clock','lottery']
  return (
    <div className={my_styles.navbar}>
      { options.map(
        (option)=>
        <Link href={option} className={my_styles.option} key = {option}> 
          {option}
        </Link>
        )
      }
    </div>
  );
}
