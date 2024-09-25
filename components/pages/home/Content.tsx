import { FaWallet, FaCoins, FaCubes, FaExchangeAlt, FaHammer } from 'react-icons/fa';

const listItems = [
  {
    icon: <FaWallet />,
    text: 'Connect with Pelagus',
  },
  {
    icon: <FaHammer />,
    text: 'Build with the Quais SDK',
  },
  {
    icon: <FaExchangeAlt />,
    text: 'Display transactions',
  },
  {
    icon: <FaCoins />,
    text: 'Display tokens',
  },
  {
    icon: <FaCubes />,
    text: 'Get Current Chain Data',
  },
  {
    text: 'And more...',
  },
];

const Content = () => {
  return (
    <div className="w-full flex flex-col py-2 gap-10">
      <p className="text-lg tracking-tight font-light text-gray-200 ">Learn the basics of building on Quai Network:</p>
      <div className="flex flex-col gap-6">
        {listItems.map((item, index) => (
          <div key={index} className="flex gap-4 items-center">
            {item.icon}
            <p className="text-md font-semibold tracking-wide text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
