import '../components/Schedule/Schedule.css';
import React from 'react';
import HorizontalTable from '../components/Schedule/HorizontalTable';
import VerticalTable from '../components/Schedule/VerticalTable';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import useWindowSize from '../utils/useWindowSize';

import FormattedEntryFee from '../components/Schedule/formattedEntryFee';
import GuaranteeType from '../components/Schedule/guaranteePrefix';
import FormattedDate from '../components/Schedule/formattedDate';
import FormattedTime from '../components/Schedule/formattedTime';
import FormattedChips from '../components/Schedule/formattedChips';
import FormattedLevels from '../components/Schedule/formattedLevels';
import MultiDayValue from '../components/Schedule/multiDay';
import HandleEventTitle from '../components/Schedule/absentTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

import { GET_SCHEDULE } from '../utils/queries';

import { useRemoveFromSchedule, sortByDateTime } from '../utils/scheduleHelper';


const Schedule = () => {
  // UNCOMMENT OUT LINES 15-30 FOR JWT AUTH WHEN APP FINISHED
  //     const navigate = useNavigate();

  //   useEffect(() => {
  //     const token = Auth.getToken();

  //     if (!token) {
  //       navigate('/signup');
  //     }
  //     }, [navigate]);

  //     const token = Auth.getToken();

  //     if (!token) {
  //         return null;
  //     }

  const size = useWindowSize();

  return (
    <div>
      {size.width >= 600 && <HorizontalTable />}
      {size.width < 600 && <VerticalTable />}
    </div>
  )
};

export default Schedule;