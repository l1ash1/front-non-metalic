import FormBlock from '@/components/FormBlock';
import Container from '@/components/Container';
import Tabs from '@/components/Tabs';
import { getActionTab } from '@/store/selectors/commonFlagSelector';
import DetailedInfoProduct from '@/components/DetailedInfoProducts';
import {
  dataDefaultSandMaterial,
  dataDefaultBallastMaterial,
} from '@/pages/PageMaterials/data';

import './PageMaterials.scss';

const tabsData = ['Песок', 'Щебень', 'Камень'];

const PageMaterials = () => {
  const activeTab = getActionTab();

  return (
    <div className='materials-page'>
      <Container>
        <div className='materials-page__first-block'>
          <Tabs tabsData={tabsData}>
            {activeTab == 0 && (
              <DetailedInfoProduct
                dataDefault={dataDefaultSandMaterial}
                material='sand'
              />
            )}
            {activeTab == 1 && (
              <DetailedInfoProduct
                dataDefault={dataDefaultBallastMaterial}
                material='ballast'
              />
            )}
            {activeTab == 2 && <div>33333</div>}
          </Tabs>
        </div>
      </Container>
      <FormBlock />
    </div>
  );
};

export default PageMaterials;
