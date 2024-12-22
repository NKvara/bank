import HomeGoalsSpendings from '~/components/screens/Home/left/goalsSpendings';
import IncomeSavings from '~/components/screens/Home/left/incomeSavings';
import StatisticsHome from '~/components/screens/Home/left/statistics';

const HomeLeftSide = () => {
  return (
    <div className="flex flex-col gap-5 w-3/5">
      <IncomeSavings />
      <StatisticsHome />
      <HomeGoalsSpendings />
    </div>
  );
};

export default HomeLeftSide;
