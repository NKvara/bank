import { ReactNode } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoIosUndo } from 'react-icons/io';
import { BiTransfer } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaChartLine, FaUserCog, FaBell, FaAngleDown } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { RequireAuth, useAuth } from '~/components/auth/AuthProvider';

type NavbarProps = {
  children: ReactNode;
};

const navPages = [
  { name: 'Dashboard', link: '/', icon: <AiFillHome /> },
  { name: 'Transfer', link: '/transfer', icon: <IoIosUndo /> },
  { name: 'Transactions', link: '/transactions', icon: <BiTransfer /> },
  { name: 'Accounts and Cards', link: '/accounts-cards', icon: <BsFillCreditCardFill /> },
  { name: 'Investments', link: '/investments', icon: <FaChartLine /> },
];

interface NavTextProps {
  text: string;
  icon: ReactNode;
  link: string;
}

const Navbar = ({ children }: NavbarProps) => {
  const location = useLocation();
  const auth = useAuth();

  const { pathname } = location;

  const curPage = navPages.filter((page) => {
    return page.link === pathname;
  });

  const NavText = ({ text, icon, link }: NavTextProps) => {
    return (
      <Link to={link}>
        <div
          style={{
            fontWeight: pathname === link ? 'bold' : 'normal',
            color: pathname === link ? 'black' : 'rgb(55, 65, 81)',
            marginLeft: pathname === link ? '45px' : '3rem',
          }}
          className="flex items-center"
        >
          {pathname === link && <div className="bg-black w-[3px] h-6 absolute left-0" />}
          <span>{icon}</span>
          <span className="ml-3">{text}</span>
        </div>
      </Link>
    );
  };

  return (
    <RequireAuth>
      <div className="flex">
        <div className="h-screen w-80 bg-gray-100" />
        <div className="fixed top-0 h-screen w-80 pt-16 bg-gray-100">
          <span className="text-xl text-gray-700 ml-12">Help Bank</span>
          <div className="flex flex-col gap-5 mt-12">
            {navPages.map((o) => (
              <NavText key={o.name} text={o.name} icon={o.icon} link={o.link} />
            ))}
          </div>
          <div className="flex flex-col gap-5 absolute bottom-16">
            <NavText text="Settings" icon={<FaUserCog />} link="/settings" />
            <NavText text="Sign Out" icon={<FiLogOut />} link="/sign-out" />
          </div>
        </div>
        <div className="flex justify-center py-12 w-[calc(100vw-20rem)]">
          <div className="w-[1072px]">
            <div className="flex justify-between items-center mb-12">
              <span className="text-3xl font-bold">{curPage[0].name}</span>
              <div className="flex items-center gap-4">
                <FaBell size={22} />
                <div className="avatar online">
                  <div className="w-10 rounded-full bg-blue-200" />
                </div>
                <div className="flex gap-2 items-center [&>svg]:mt-1">
                  <span className="capitalize">{auth.user}</span>
                  <FaAngleDown size={19} />
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </RequireAuth>
  );
};

export default Navbar;
