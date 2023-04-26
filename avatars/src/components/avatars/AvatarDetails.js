import { useState } from 'react';
import Data from '../data/Data.json';
import { useParams } from 'react-router-dom';

const AvatarDetails = () => {
  const [detail, setDetail] = useState([]);

  const { id } = useParams();

  console.log(id);

  const avatar = Data.Avatars.find((a) => a.id === Number(id));


  console.log(avatar);

  return (
    <>

      {avatar && (
        <>
          <img src={avatar.image} alt={avatar.name} />
          <p>{avatar.name}</p>
        </>
      )}
    </>
  );
};

export default AvatarDetails;
