import '../components/Schedule/Schedule.css';
import { DesktopScheduleTable, MobileScheduleTable } from '../components/Schedule/ScheduleTable';
import useWindowSize from '../utils/useWindowSize';


const Schedule = () => {
  // UNCOMMENT OUT LINES 10-24 FOR JWT AUTH WHEN APP FINISHED
    //   const navigate = useNavigate();

    // useEffect(() => {
    //   const token = Auth.getToken();

    //   if (!token) {
    //     navigate('/signup');
    //   }
    //   }, [navigate]);

    //   const token = Auth.getToken();

    //   if (!token) {
    //       return null;
    //   }

  const size = useWindowSize();

  return (
    <div>
      {size.width >= 600 && <DesktopScheduleTable />}
      {size.width < 600 && <MobileScheduleTable />}
    </div>
  )
};

export default Schedule;