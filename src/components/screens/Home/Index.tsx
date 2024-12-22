import HomeLeftSide from '~/components/screens/Home/left';
import HomeRightSide from '~/components/screens/Home/right';

export default function HomeScreen() {
  return (
    <div className="flex flex-row gap-5">
      <HomeLeftSide />
      <HomeRightSide />
    </div>
  );
}
