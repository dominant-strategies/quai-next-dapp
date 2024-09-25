import type { FC } from 'react';

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="py-[100px] min-h-[500px] flex justify-center items-center">
      <main>{children}</main>
    </div>
  );
};

export default BaseLayout;
