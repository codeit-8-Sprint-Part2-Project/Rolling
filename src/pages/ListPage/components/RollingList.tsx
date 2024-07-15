import React from 'react';
import { Link } from 'react-router-dom';
//import defaultImage from './path-to-default-image'; // defaultImage 경로에 따라 수정 필요
//import heartIcon from './path-to-heart-icon'; // heartIcon 경로에 따라 수정 필요

interface RollingListProps {
  id: number;
  name: string;
  images: string;
  price: number;
  favoriteCount: number;
}

const RollingList: React.FC<RollingListProps> = ({ id, name, images, price, favoriteCount }) => {
  const itemPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    //e.currentTarget.src = defaultImage;
  };

  return (
    <article className="border p-4 rounded-md shadow-sm">
      <Link to={`/post/${id}`}>
        <div className="overflow-hidden rounded-md">
          <img src={images} onError={onErrorImg} alt={name} className="w-full h-48 object-cover" />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600">{`${itemPrice}원`}</p>
          <div className="flex items-center mt-2">
            {/*<img src={heartIcon} alt="좋아요" className="w-4 h-4 mr-1" />*/}
            <p className="text-sm text-gray-500">{favoriteCount}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default RollingList;
