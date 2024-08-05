import '../components/Schedule/Schedule.css'
import HorizontalEvent from '../components/Event/HorizontalEvent';
import VerticalEvent from '../components/Event/VerticalEvent';
import useWindowSize from '../utils/useWindowSize';

const Event = () => {

  const size = useWindowSize();

  return (
    <div>
      {size.width >= 600 && <HorizontalEvent />}
      {size.width < 600 && <VerticalEvent />}
    </div>
  )
};

export default Event;