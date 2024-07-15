import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import profileImg from "../assets/images/avatar/avatar01.png";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useSearchData } from "../utils/serviceAPI/searchServices";
import storyImg from "../assets/images/illustration/illustration01-register.png";
import { useUser } from "../utils/serviceAPI/backendService-zustend";

export default function DetailUser({loanItem}) {
  const lend = useUser((state) => state.lendUser);
  const loader = useUser((state) => state.loader);
  const fectLendById = useUser((stete) => stete.fectLendById);
  const handleAddLend = useUser((stete) => stete.handleAddLend);

  useEffect(() => {
    fectLendById();
  }, [loader]);

  console.log(loanItem);
  if (loanItem === 0) {
    return <div>Loading...</div>; // หรือข้อความอื่นที่คุณต้องการแสดงระหว่างการ Redirect
  }

  return (
    <div className="flex flex-row justify-center gap-10">
      {loanItem.length === 0 ? (
        <div className="flex h-[388px] items-center justify-center">
        <Button asChild className="w-[200px] bg-green-500">
          <Link to="/select">Go to select page</Link>
        </Button>
        </div>
      ) : (
        <>
          <div className="flex flex-col w-[500px] gap-5 my-5">
            <Card className="w-full bg-green-100 border-none">
              <CardHeader className="flex flex-row gap-5">
                <Avatar className="w-20 h-20">
                  <AvatarImage
                    src={
                      loanItem?.borrower?.ImgUrl
                        ? loanItem?.borrower?.ImgUrl
                        : profileImg
                    }
                    alt="@shadcn"
                  />
                </Avatar>
                <div className="flex flex-col w-full gap-2">
                  <CardTitle>
                    {loanItem?.borrower?.firstname}{" "}
                    {loanItem?.borrower?.lastname}
                  </CardTitle>
                  <CardDescription>
                    <Progress value={20} />
                    <div className="flex justify-between">
                      <h2>{13} day</h2>
                      <h2>
                        THB {(loanItem?.total_amount).toLocaleString()} togo
                      </h2>
                    </div>
                    <div className="flex justify-between">
                      <div>REMAINING</div>
                      <div>{20}% FUNDED</div>
                    </div>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{loanItem?.purpose}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <div className="border border-gray-950 p-1 rounded-3xl">
                  {loanItem.categories?.categorie_name}
                </div>
                <div className="border border-gray-400 p-1 rounded-3xl">
                  {loanItem.businessAddress?.province_name}
                </div>
              </CardFooter>
            </Card>
            <div>
              {/* <img src="" alt="" /> */}
              <h1 className="flex flex-col w-full h-[250px] items-center justify-center text-[100px]">
                <img
                  src={storyImg}
                  alt=""
                  className="object-contain w-full h-full"
                />
              </h1>
              <div className="flex flex-col gap-3 mt-5">
                <h1 className="text-xl">Story</h1>
                <div>{loanItem?.story}</div>
          
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl">{loanItem.businessAddress?.province_name}</h1>
              {/* <div className="flex flex-row justify-between">
                <div>
                  <h1 className="text-2xl">THB 54,800</h1>
                  <h3>Average annual income (THB)</h3>
                </div>
                <div>
                  <h1 className="text-2xl">35</h1>
                  <h3>Loans currently fundraising</h3>
                </div>
              </div> */}
              <Button asChild className="w-fit bg-green-500">
                <Link to="/select">Find more borrowers</Link>
              </Button>
            </div>
          </div>
          <div className="w-[400px] py-5 pt-10">
            <div className="pb-5">
              <h1>Help fund this loan</h1>
              <div className="flex flex-row py-3">
                <Select>
                  <SelectTrigger className="w-1/2">
                    <SelectValue placeholder="500 THB" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500">500 THB</SelectItem>
                    <SelectItem value="1000">1,000 THB</SelectItem>
                    <SelectItem value="1500">1,500 THB</SelectItem>
                  </SelectContent>
                </Select>
                {lend.some((el) => el.loan_id === loanItem.id) ? (
              <button disabled className="border p-2 rounded-lg">
                Lended
              </button>
            ) : (
              <Button
                className="w-1/3 bg-green-500 "
                onClick={() => handleAddLend(items, loader)}
              >
                Lend
              </Button>
            )}
              </div>
            </div>
            <hr />
          </div>
        </>
      )}
    </div>
  );
}
