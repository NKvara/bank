import { GrShare } from 'react-icons/gr';
import { HiOutlineArrowPathRoundedSquare } from 'react-icons/hi2';

const TransferLeftSide = () => {
  return (
    <div className="flex flex-col gap-6 w-1/3">
      <span className="text-2xl font-semibold">Select Payer</span>
      <select className="select select-ghost w-full focus:outline-none pl-2 h-14 text-white focus:text-white bg-stone-900">
        <option selected>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <div className="flex flex-col">
        <div className="h-80 bg-stone-900 flex flex-col p-6 text-white justify-between">
          <span>Checking Account</span>
          <span className="text-xs">Balance</span>
          <span className="text-4xl font-semibold text-teal-200">USD 10,000.00</span>
          <hr className="border-t-2 border-t-gray-500" />
          <div className="flex flex-col gap-1">
            <span className="text-sm">IBAN</span>
            <span>AB11 0000 0000 1111 1111</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm">Account owner</span>
            <span>Nicola Rich</span>
          </div>
        </div>
        <div className="bg-violet-300 h-12 flex justify-center items-center gap-3 cursor-pointer">
          <GrShare size={14} />
          <span className="text-sm">Share IBAN</span>
        </div>
        <div className="bg-orang h-12 flex justify-center items-center gap-3 cursor-pointer">
          <HiOutlineArrowPathRoundedSquare size={14} />
          <span className="text-sm">Request payment</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TransferLeftSide;
