import React, { useEffect,useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSearchData } from "../utils/serviceAPI/searchServices";
import storyImg from "../assets/images/loandetailImg/framing.jpg";
import { useUser } from "../utils/serviceAPI/backendService-zustend";
import * as Avata from "../assets/images/avatar/imgAva";
import { motion } from "framer-motion";


const backendUrl = import.meta.env.VITE_BACKEND_URL;
export default function DetailUser({ loanItem }) {

  const lend = useUser((state) => state.lendUser);
  const loader = useUser((state) => state.loader);
  const fectLendById = useUser((stete) => stete.fectLendById);
  const handleAddLend = useUser((stete) => stete.handleAddLend);
  const amountAllId = useSearchData((state) => state.amountAllId);
  const setLoader = useUser((stete) => stete.setLoader);

  const [amount, setAmount] = useState(500)
  useEffect(() => {
    fectLendById();
  }, [loader]);

  if (loanItem === 0) {
    return <div>Loading...</div>;
  }
  const hdlClick = (items,loader) => {
    // console.log(items,+amount)
  
    handleAddLend(items,+amount)
    setLoader(!loader)
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
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="flex flex-col w-[500px] gap-5 my-5">
              <Card className="w-full bg-green-100 border-none">
                <CardHeader className="flex flex-row gap-5">
                  <Avatar className="w-20 h-20">
                    <AvatarImage
                      src={
                        loanItem?.borrower?.ImgUrl
                          ? `${backendUrl}${loanItem?.borrower?.ImgUrl}`
                          : `${Avata[`avatar${loanItem?.borrower?.id}`]}`
                      }
                      className="w-full object-contain"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div className="flex flex-col w-full gap-2">
                    <CardTitle className='mb-2'>
                      {loanItem?.borrower?.firstname}{" "}
                      {loanItem?.borrower?.lastname}
                    </CardTitle>

                    {amountAllId.some((el) => el.loan_id === loanItem.id) ? (
                      amountAllId.map((el) =>
                        el.loan_id === loanItem.id ? (
                          <CardDescription>
                            <Progress
                              value={(
                                (el._sum.amount / loanItem?.total_amount) *
                                100
                              ).toFixed(2)}
                            />
                            <div className="flex justify-between">
                              <h2>{13}day</h2>
                              <h2>
                                THB{" "}
                                {(
                                  loanItem?.total_amount - el._sum.amount
                                ).toLocaleString()}{" "}
                                togo
                              </h2>
                            </div>
                            <div className="flex justify-between">
                              <div>REMAINING</div>
                              <div>
                                {(
                                  (el._sum.amount / loanItem?.total_amount) *
                                  100
                                ).toFixed(2)}
                                % FUNDED
                              </div>
                            </div>
                          </CardDescription>
                        ) : null
                      )
                    ) : (
                      <>
                        <CardDescription>
                          <Progress value={0} />
                          <div className="flex justify-between mt-2">
                            <h2>{13} day</h2>
                            <h2>
                              THB {(loanItem?.total_amount).toLocaleString()}{" "}
                              togo
                            </h2>
                          </div>
                          <div className="flex justify-between">
                            <div>REMAINING</div>
                            <div>{0}% FUNDED</div>
                          </div>
                        </CardDescription>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{loanItem?.purpose}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <div className="border border-gray-950 py-1 px-2 rounded-3xl">
                    {loanItem.categories?.categorie_name}
                  </div>
                  <div className="border border-gray-400 p-1 px-2 rounded-3xl">
                    {loanItem.businessAddress?.province_name}
                  </div>
                </CardFooter>
              </Card>
              <div>
                <div className="flex flex-col w-full items-center justify-center">
                  <img
                    src={storyImg}
                    alt="storyImg"
                    className="object-contain rounded-tl-3xl rounded-br-3xl"
                  />
                </div>
                <div className="flex flex-col gap-3 mt-5">
                  <h1 className="text-2xl">Story</h1>
                  <p className="indent-16">{loanItem?.story}</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl">
                  {loanItem.businessAddress?.province_name}
                </h1>
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
          </motion.div>
          <div className="w-[400px] py-5 pt-10">
            <div className="pb-5">
              <h1>Help fund this loan</h1>
              <div className="flex flex-row py-3">
                <Select onValueChange={setAmount}>
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
                    onClick={() => hdlClick(loanItem, loader)}
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
