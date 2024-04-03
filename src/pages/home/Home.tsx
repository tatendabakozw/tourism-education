import { ReactElement, useRef } from "react";
import {
  ArrowDownCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
// import logo from "../../assets/cut-new-logo.webp";
import logo from '../../assets/cut.jpg'
import cog_wheel from "../../assets/cogwheel1.svg"; 
import cog_blue1 from "../../assets/cog_blue1.svg";
// import msu from '@assets/michigan-state-university.svg'
import msu from '../../assets/ascLogo.png'
import { Link } from "react-router-dom";
import ConferenceSteps from "@components/ConferenceSteps/ConferenceSteps";

type Props = {};

const Home = (props: Props): ReactElement => {
  const ref = useRef<any>(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" w-full h-full min-h-screen md:bg-gradient-to-r bg-gradient-to-b from-white to-blue-300">
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        <div
          onClick={handleScroll}
          className="absolute md:bottom-10 bottom-5 cursor-pointer md:right-10 right-5 p-2 animate-bounce bg-blue-900 text-white rounded-full "
        >
          <ArrowDownCircleIcon height={28} width={28} />
        </div>
        <div className="flex flex-row w-full font-semibold items-center z-50 justify-between p-2">
          <div className="flex flex-row items-center md:space-x-4 space-x-2">
            <img
              src={logo}
              alt="logo icon"
              className="md:h-24 h-16 md:w-32 w-24"
            />
          </div>

          <div className="flex flex-col">
            <Link
              to="/register"
              className="bg-blue-900 self-end flex-shrink-0  text-white md:text-sm text-xs py-2 px-3 rounded-full"
            >
              Register Now
            </Link>
          </div>
          <div className="flex">
            <img
              src={msu}
              alt="msu logo icon"
              className="md:h-20 h-12 object-contain bg-white"
            />
          </div>
        </div>
        <div className="absolute md:h-96 h-40 md:w-96 w-40 rounded-full md:-top-20 -top-10 md:-right-20 -right-10 z-0">
          <img src={cog_wheel} alt="" className="" />
        </div>
        <div className="absolute  rounded-full md:h-[600px] h-[400px] md:w-[600px] w-[400px] top-0 my-auto z-0 mx-0 bottom-0 md:-left-40 -left-40">
          <img src={cog_blue1} alt="" className="" />
        </div>
        <div className="flex z-40 flex-col items-center h-full flex-1 content-center justify-center w-full max-w-7xl pt-4 mx-auto">
          
          <p className="text-5xl text-center text-slate-900 font-bold">
            International hospitality & tourism education conference
          </p>
          <p className="text-sm text-slate-500 text-center font-semibold py-8">
            Exploring growth, innovation and industrialisation opportunities in
            hospitality and tourism education
          </p>
          <p className="text-sm text-slate-500 pb-8"> 9-11 April, 2024, Chinhoyi University Hotel, Zimbabwe</p>
          <div className="flex flex-row bg-white md:text-md text-sm items-center rounded-full py-1 pr-1 md:space-x-5 space-x-2  pl-3">
            <p>Click here for registration</p>
            <Link
              to="/register"
              className="bg-blue-900 text-white cursor-pointer hover:bg-blue-800 rounded-full text-center px-3 py-1 text-sm"
            >
              Register Now
            </Link>
          </div>
          <Link
            to="/Provisional-Hospitality-and-Tourism Education-Conf.pdf"
            download
            target="_blank"
            className="flex text-slate-900 space-x-4 flex-row items-center font-semibold py-16"
          >
            <p>More Info</p>
            <ArrowDownTrayIcon height={20} width={20} />
          </Link>
        </div>
      </div>

      <div ref={ref} className="w-full bg-white py-16 px-4">
        <ConferenceSteps />
      </div>
    </div>
  );
};

interface StepItemProps {
  icon: any;
  heading: string;
  desciption: string;
  iconStyles?: string;
}

export const StepItem = (props: StepItemProps) => {
  return (
    <li className="mb-10 ml-6">
      <span
        className={`${props.iconStyles} absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white`}
      >
        {props.icon}
      </span>
      <h3 className="font-medium leading-tight capitalize text-slate-900">
        {props.heading}
      </h3>
      <p className="text-sm whitespace-pre-line">{props.desciption}</p>
    </li>
  );
};

export default Home;
