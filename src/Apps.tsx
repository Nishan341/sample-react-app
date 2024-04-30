import "./Apps.css";
import NavBars from "./components/NavBars";
import SesmicCard from "./components/SesmicCard";

const Apps = () => {
    return (
      <div className="flex flex-col h-screen">
        <NavBars />
        <div className="flex flex-1 overflow-auto flex-col items-center align-middle justify-center  h-full w-full">
          <SesmicCard />
        </div>
      </div>
    );
  };
  
  export default Apps;
  