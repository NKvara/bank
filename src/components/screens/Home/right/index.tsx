import HomeQuickTransfer from "~/components/screens/Home/right/quickTransfer";
import HomeTransactions from "~/components/screens/Home/right/transactions";

const HomeRightSide = () => {
  return (
    <div className="flex flex-col justify-between gap-5 w-2/5">
      <HomeTransactions />
      <HomeQuickTransfer />
    </div>
  );
};

export default HomeRightSide;
