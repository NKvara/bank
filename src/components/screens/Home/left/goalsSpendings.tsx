import { FaPlane } from 'react-icons/fa';

const HomeGoalsSpendings = () => {
  const SpendingProgress = ({ text, val }: { text: string; val: string }) => {
    return (
      <div className="flex flex-row items-center gap-2">
        <progress className="progress w-32 h-3" value={val} max="100" />
        <span className="font-semibold text-sm w-9">{val}%</span>
        <span className="text-sm text-left">{text}</span>
      </div>
    );
  };

  return (
    <div className="flex gap-5 h-48">
      <div className="flex flex-col justify-between w-1/2 bg-violet-300 p-5">
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Goals</span>
          <span className="text-sm">Summer Vacation</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-white rounded-full p-4">
            <FaPlane size={27} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold">62% Reached</span>
            <progress className="progress w-52" value="62" max="100" />
            <span className="text-xs text-gray-800">1,485$ out of 2,385$</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-1/2 bg-orang p-5">
        <span className="font-semibold">Spending Overview</span>
        <div className="flex flex-col gap-2">
          <SpendingProgress text="Groceries" val="68" />
          <SpendingProgress text="Withdrawal" val="20" />
          <SpendingProgress text="Retail" val="10" />
          <SpendingProgress text="Leisure" val="2" />
        </div>
      </div>
    </div>
  );
};

export default HomeGoalsSpendings;
