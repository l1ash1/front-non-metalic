import React from 'react';

import TabPane from '@/components/TabPane/TabPane';

import './Tabs.scss';

interface IProps {
  children: React.ReactNode;
  tabsData: string[];
}

const Tabs = ({ children, tabsData }: IProps) => {
  return (
    <div className='tabs'>
      <TabPane tabsData={tabsData} />
      <div className='tabs__children'>{children}</div>
    </div>
  );
};

export default Tabs;
