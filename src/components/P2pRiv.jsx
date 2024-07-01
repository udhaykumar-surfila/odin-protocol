import Rive from '@rive-app/react-canvas';
import p2p from '../assets/p2p.riv';

export const P2pRiv = () => (
  <Rive
  className='p2p-riv relative top-0 right-[-35%] '
    height={400}
    src={p2p}
    autoplay
    loop
  />
);