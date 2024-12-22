import { ReactNode } from 'react';
import { FaHamburger, FaStore } from 'react-icons/fa';
import { GoArrowSwitch } from 'react-icons/go';

const transactionList = [
  {
    name: 'Central Burger',
    category: 'Cafe and Restaurant',
    amount: -189.36,
    icon: <FaHamburger />,
  },
  {
    name: 'The Market',
    category: 'Groceries',
    amount: 92.5,
    icon: <FaStore />,
  },
  {
    name: 'Quick Transfer',
    category: 'Maria Purple',
    amount: -29.19,
    icon: <GoArrowSwitch />,
  },
  {
    name: 'Central Burger',
    category: 'Cafe and Restaurant',
    amount: -102.19,
    icon: <FaHamburger />,
  },
  {
    name: 'Quick Transfer',
    category: 'Maria Purple',
    amount: 2050.25,
    icon: <GoArrowSwitch />,
  },
  {
    name: 'Quick Transfer',
    category: 'Jenny Kim',
    amount: -1052.23,
    icon: <GoArrowSwitch />,
  },
];

const HomeTransactions = () => {
  const Transaction = ({
    icon,
    name,
    bg,
    category,
    amount,
  }: {
    icon: ReactNode;
    bg: number;
    name: string;
    category: string;
    amount: number;
  }) => {
    return (
      <div className="flex justify-between items-center px-4 py-6 hover:bg-gray-50">
        <div className="flex flex-row items-center gap-4">
          <div
            style={{ backgroundColor: bg === 0 ? '#C6B5F2' : bg === 1 ? '#B5DCF2' : '#FCBFA7' }}
            className="flex justify-center items-center rounded-full p-3 aspect-square"
          >
            {icon}
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">{name}</span>
            <span className="text-xs text-gray-500">{category}</span>
          </div>
        </div>
        <span style={{ color: amount > 0 ? '#2EB2AA' : '#E1234E' }} className="font-bold text-lg">
          {amount > 0 && '+'}
          {amount}$
        </span>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[532px] gap-5">
      <div className="flex justify-between items-center px-4">
        <span className="text-2xl font-semibold">Transactions</span>
        <span className="text-xs text-gray-500">View All</span>
      </div>
      <div className="flex gap-4 px-4 text-sm">
        <span className="font-semibold">All</span>
        <span className="text-gray-600">Expenses</span>
        <span className="text-gray-600">Income</span>
      </div>
      <div className="flex flex-col divide-y overflow-y-auto overflow-y">
        {transactionList.map((o, i) => (
          <Transaction key={i} bg={i % 3} icon={o.icon} amount={o.amount} category={o.category} name={o.name} />
        ))}
      </div>
    </div>
  );
};

export default HomeTransactions;
