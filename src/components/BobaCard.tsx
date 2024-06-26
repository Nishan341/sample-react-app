import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { TbCube, TbCubeOff } from "react-icons/tb";
import { GrStatusGoodSmall } from "react-icons/gr";
import { GiMilkCarton } from "react-icons/gi";
import { WiSnowflakeCold } from "react-icons/wi";
import { getBobaData } from "../api/actions";

const BobaCard: React.FC = () => {
  const [data, setData] = useState<BobaData>();
  const [loadingState, setLoadingState] = useState(false);
  const [drink, setDrink] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    console.log("Fetching Boba Data...");
    console.log(drink);
    setLoadingState(true);
    getBobaData(drink)
      .then((res) => {
        setError("");
        if (res) {
          console.log(res);
          setData(res);
          setLoadingState(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoadingState(false);
        setData(undefined);
        setError(error);
      });
  };

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex flex-col w-full p-20 space-y-10">
            <Input
              id="bobaname"
              type="text"
              label="boba tea"
              value={drink}
              onChange={(e) => {
                setDrink(e.target.value);
              }}
            />
            <Button
              className=""
              color="primary"
              isLoading={loadingState}
              type="submit"
            >
              Search
            </Button>
          </div>
        </form>
      </CardHeader>
      <Divider />
      {data ? (
        <CardBody>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">{data.drink}</h1>
            {data.sugar > 20 ? (
              <div>
                < TbCube className="w-20 h-20" />
              </div>
            ) : (
              <div>
                <TbCubeOff className="w-20 h-20" />
              </div>
            )}
            <p className="text-3xl font-bold">{data.sugar}%</p>
             <div>
              <GiMilkCarton color='blue'className="w-20 h-20"/>
              </div>
            <p className="text-lg">milk:{data.milk}%</p>
            <div>
              <GrStatusGoodSmall color='brown' className="w-20 h-20"/>
              </div>
            <p className="text-lg">Tapioca: {data.Tapioca}%</p>
            <div>
              <WiSnowflakeCold color='black'className="w-20 h-20"/>
              </div>
            <p className="text-lg">ice: {data.ice} %</p>
          </div>
        </CardBody>
      ) : (
        <CardBody>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Please enter the boba tea</p>
          </div>
        </CardBody>
      )}
      <Divider />
      <CardFooter>
        <div className="flex flex-col items-left">
          {error && <p className="text-xs text-red-600 ">{error}</p>}
          {data && (
            <p className="text-xs  text-gray-600 ">Last update successful.</p>
          )}
          {!data && (
            <p className="text-xs  text-gray-600 ">Waiting for input...</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BobaCard;
