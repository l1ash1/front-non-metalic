import { IData, IPriceList } from '@/productsTypes';
import { useFetchMaterialQuery } from '@/services/materialsService';

import './DetailedInfoProducts.scss';

interface IProps {
  material: string;
  dataDefault: IData[];
}

const DetailedInfoProducts = ({ material, dataDefault }: IProps) => {
  const { data } = useFetchMaterialQuery({ material: material });

  const materials = dataDefault?.map((materialFromDefData) => {
    const curMaterial = data?.find((materialFromData) => materialFromData.title === materialFromDefData.title);

    return { ...curMaterial, img: materialFromDefData.img };
  });

  return (
    <div className='detailed-info-products'>
      {materials?.map(({ img, title, text, priceList }) => (
        <div key={title} className='detailed-info-product'>
          <div className='detailed-info-product__container'>
            <div className='detailed-info-product__img-block'>
              <img
                className='detailed-info-product__img-block__img'
                src={img}
                alt='img'
              />
            </div>
            <div className='detailed-info-product__info-block'>
              <h2 className='detailed-info-product__info-block__title'>
                {title}
              </h2>
              <div className='detailed-info-product__info-block__text'>
                <span>{text}</span>
              </div>
              <div className='detailed-info-product__info-block__price-list'>
                {priceList &&
                  priceList.map(({ product, price }: IPriceList) => (
                    <div
                      className='detailed-info-product__info-block__price-list__item'
                      key={product}
                    >
                      <div>{product}</div>
                      <div>От {price} ₽</div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailedInfoProducts;
