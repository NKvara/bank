import { FaCircleArrowUp } from 'react-icons/fa6';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';

const mockGraph = [500, 920, 2000, 2360, 3320, 3562, 4627, 5000];

const IncomeSavings = () => {
  return (
    <div className="flex gap-5 h-48">
      <div className="flex flex-col justify-between p-5 w-3/5 bg-blue-50">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Total Balance</span>
          <div className="flex items-center text-teal-500">
            <FaCircleArrowUp size={18} />
            <span className="ml-1">2.36%</span>
          </div>
        </div>
        <span className="text-3xl font-bold">USD 10,000.00</span>
        <div className="flex items-center justify-between w-full gap-6">
          <div className="w-full">
            <div className="flex text-teal-500 mb-1">
              <RiArrowUpSFill />
              <span className="text-black text-xs">Income</span>
            </div>
            <span className="font-semibold">USD 30,000.00</span>
          </div>
          <div className="bg-black w-[2px] h-full" />
          <div className="w-full">
            <div className="flex text-rose-600 mb-1">
              <RiArrowDownSFill />
              <span className="text-black text-xs">Expenses</span>
            </div>
            <span className="font-semibold">USD 20,000.00</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between p-5 w-2/5 bg-blue-50">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Total Savings</span>
          <div className="flex items-center text-teal-500">
            <FaCircleArrowUp size={18} />
            <span className="ml-1">2.36%</span>
          </div>
        </div>
        <span className="text-2xl font-bold">USD 5,000.00</span>
        <div className="flex justify-between items-end">
          {mockGraph.map((o) => {
            const blockHeight = `${((o / mockGraph[mockGraph.length - 1]) * 45).toString()}px`;

            return <div key={o} style={{ height: blockHeight }} className="w-5 bg-blue-200" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default IncomeSavings;
