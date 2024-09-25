import { Button } from '@/components/ui';

const FooterContent = [
  {
    title: 'Documentation',
    link: 'https://docs.qu.ai',
  },
  {
    title: 'Github',
    link: 'https://github.com/dominant-strategies/quai-next-dapp',
  },
  {
    title: 'Quai Network',
    link: 'https://qu.ai',
  },
];

const Footer = () => {
  return (
    <div className="flex w-full p-[15px] fixed bottom-0 left-0 max-h-[60px] bg-rgba(13,13,13,0.8) backdrop-blur-[10px] z-[100] border-t-[1px] border-t-gray">
      <div className="w-full flex justify-center gap-[15px]">
        {FooterContent.map((item, key) => (
          <Button key={key} variant="link" size="sm" href={item.link} newTab={true}>
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Footer;
