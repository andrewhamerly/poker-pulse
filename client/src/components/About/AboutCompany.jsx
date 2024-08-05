const AboutCompany = () => {
  return (
    <>
        <section className="bg-whiteSmoke text-onyx">
        <div className="max-w-screen-3xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
            <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">About Poker Pulse</h2>

            <p className="mt-4 text-xl text-outerSpace">
            Poker Pulse is a companion app designed for poker players participating in live tournaments. 
            The app allows players to manage their profiles, track tournament schedules, and receive real-time updates. 
            This ensures that players stay organized and informed throughout their playing experience.
            </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-outerSpace p-4">
                <svg
                    className="h-5 w-5 text-whiteSmoke"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l-2 2m4-2a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35"
                    />
                </svg>
                </span>

                <div>
                <h2 className="text-xl font-bold">Find Events</h2>

                <p className="mt-1 text-md text-outerSpace">
                    Checkout a list of tournament events with the ability to search or filter results for easy access to what your looking for.
                </p>
                </div>
            </div>
            
            <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-outerSpace p-4">
                <svg
                    className="h-5 w-5 text-whiteSmoke"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-6 8h6m-6 4h6M5 7h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
                    />
                </svg>
                </span>

                <div>
                <h2 className="text-xl font-bold">Dial in Your Schedule</h2>

                <p className="mt-1 text-md text-outerSpace">
                    Tired of missing the events or forgetting your plan? 
                    Use our app to keep track of your tournament schedule.
                </p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-outerSpace p-4">
                <svg
                    className="h-5 w-5 text-whiteSmoke"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M21 12v7a2 2 0 01-2 2H7l-4 4V7a2 2 0 012-2h11a2 2 0 012 2v5"
                    />
                </svg>
                </span>

                <div>
                <h2 className="text-xl font-bold">Connect With Players</h2>

                <p className="mt-1 text-md text-outerSpace">
                    Chat with other players in our community feed. 
                    Learn about the latest information regarding tournament action.
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default AboutCompany;
