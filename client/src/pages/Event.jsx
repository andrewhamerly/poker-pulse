import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_EVENTS } from '../utils/queries';
// import { ADD_EVENT_TO_SCHEDULE } from '../utils/mutations';

const Event = () => {
    const { loading, error, data } = useQuery(GET_EVENTS);
    const [addEventToSchedule] = useMutation(ADD_EVENT_TO_SCHEDULE);

    return (
        <>

        </>
    );
};
export default Event;