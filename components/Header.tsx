import Image from 'next/image';
import Link from 'next/link';
import Navitems from './Navitems';
import Userdropdown from './Userdropdown';

const Header = () => {
  return (
    <header className='sticky top-0 header'>
      <div className='container header-wrapper'>
        <Link href='/'>
          <Image
            src='/assets/icons/logo.svg'
            alt='Signalist logo'
            width={140}
            height={32}
            className='h-8 w-auto cursor-pointer'
          />
        </Link>
        <nav className='hidden sm:block'>
          <Navitems />
        </nav>
        <Userdropdown />
      </div>
    </header>
  );
};

export default Header;
