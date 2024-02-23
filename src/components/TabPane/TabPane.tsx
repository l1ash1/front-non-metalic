import './TabPane.scss';
import { useAppDispatch } from '@/hooks/redux';
import { setActionTab } from '@/store/reducers/commonFlags';
import { getActionTab } from '@/store/selectors/commonFlagSelector';

interface IProps {
  tabsData: string[];
}

const TabPane = ({ tabsData }: IProps) => {
  const activeTab = getActionTab();
  const dispatch = useAppDispatch();

  const onChangeActionTab = (i: number) => {
    dispatch(setActionTab(i));
  };

  return (
    <div className='tab-pane'>
      {tabsData.map((value, i) => (
        <div
          key={i}
          className={
            activeTab == i
              ? `${'tab-pane__item tab-pane__item_active'}`
              : 'tab-pane__item'
          }
          onClick={() => onChangeActionTab(i)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default TabPane;
