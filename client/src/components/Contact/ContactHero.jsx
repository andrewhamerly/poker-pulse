import { Link } from 'react-router-dom';
import bkg from '../../assets/images/poker-pulse-bkg.png';

const ContactHero = () => {
  return (
    <>
    <section
        style={{ backgroundImage: `url(${bkg})` }}
        className="relative bg-cover bg-center bg-no-repeat"
    >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full text-center">
            <div className="relative z-10">
                <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                    Have Questions?
                    <strong className="block font-extrabold text-vermillion">Need Support.</strong>
                </h1>
                <p className="mt-4 max-w-lg text-white sm:text-xl">
                Reach out to us through the contact form below or connect with us directly via email or social media. We look forward to hearing from you!
                </p>
            </div>
        </div>
    </section>
    </>
  );
};

export default ContactHero;