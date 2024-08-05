import { Link } from 'react-router-dom';
import cta from '../../assets/images/poker-pulse-cta.png';

const AboutCTA = () => {
  return (
    <>
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                alt=""
                src={cta}
                className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">Ready to Play?</h2>

                <p className="mt-4 text-xl text-eerieBlack">
                Join our community of top players who trust Poker Pulse to keep them informed of tournament schedules and ahead of the competition. It's your time to shine at the tables!
                </p>

                <Link to="/signup" className="mt-8 inline-block rounded bg-hunterGreen px-12 py-3 text-xl font-semibold text-white transition hover:bg-onyx focus:outline-none focus:ring focus:ring-yellow-400">
                Signup Today
                </Link>
            </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default AboutCTA;