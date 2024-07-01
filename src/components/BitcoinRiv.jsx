import Rive from '@rive-app/react-canvas';
import bitcoin from '../assets/Bitcoin.riv';

export const BitcoinRiv = () => (
  <Rive
  className='bitcoin-riv relative'
    height={400}
    src={bitcoin}
    autoplay
    loop
  />
);