import '../components/Schedule/Schedule.css';
import { DesktopScheduleTable, MobileScheduleTable } from '../components/Schedule/ScheduleTable';
import useWindowSize from '../utils/useWindowSize';


const Schedule = () => {

  const size = useWindowSize();

  return (
    <div>
      {size.width >= 600 && <DesktopScheduleTable />}
      {size.width < 600 && <MobileScheduleTable />}
    </div>
  )
};

export default Schedule;