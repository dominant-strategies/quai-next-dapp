const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="w-full flex font-semibold text-2xl">
      <p>{title}</p>
    </div>
  );
};

export default PageHeader;
