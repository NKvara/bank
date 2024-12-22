import { peopleArr } from "~/components/helpers/people";

const HomeQuickTransfer = () => {

  const People = ({
    image,
    name,
    lastName,
    plus = false,
  }: {
    image?: string;
    name: string;
    lastName: string;
    plus: boolean;
  }) => {
    return (
      <div className="flex flex-col gap-4">
        {plus ? (
          <div className="pointer-events-none flex justify-center items-center text-black text-2xl aspect-square w-12 rounded-full bg-white">+</div>
        ) : (
          <div
            style={{ backgroundImage: `url(${image})` || '' }}
            className="aspect-square w-12 rounded-full bg-center bg-cover"
          />
        )}

        <div className="flex flex-col">
          <span className="text-center text-xs">{name}</span>
          <span className="text-center text-xs">{lastName}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between w-full min-h-[12rem] text-white bg-stone-900 p-5">
      <span className="font-semibold">Quick Transfer</span>
      <div className="flex justify-around">
        <People plus name="Add" lastName="User" />
        {peopleArr.map((o, i) => (
          <People key={i} image={o.img} name={o.name} lastName={o.lastName} plus={false} />
        ))}
      </div>
    </div>
  );
};

export default HomeQuickTransfer;
