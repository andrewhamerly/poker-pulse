import '../components/Schedule/Schedule.css';
import HorizontalTable from '../components/Schedule/HorizontalTable';
import VerticalTable from '../components/Schedule/VerticalTable';
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
      {size.width >= 600 && <HorizontalTable />}
      {size.width < 600 && <VerticalTable />}
    </div>
  )
};

export default Schedule;