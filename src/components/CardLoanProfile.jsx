import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useSearchData } from "../utils/serviceAPI/searchServices";
import { useUser } from "../utils/serviceAPI/backendService-zustend";
import * as Avata from "../assets/images/avatar/imgAva";
import { motion } from "framer-motion";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
export default function CardLoanProfile() {

  const loanData = useSearchData((state) => state.loanData);
  const lend = useUser((state) => state.lendUser);
  const loader = useUser((state) => state.loader);
  const fectLendById = useUser((stete) => stete.fectLendById);
  const handleAddLend = useUser((stete) => stete.handleAddLend);
  const setLoader = useUser((stete) => stete.setLoader);

  const amountAllId = useSearchData((state) => state.amountAllId);

  const [visibleItems, setVisibleItems] = useState(5);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [amount, setAmount] = useState(500)
    useEffect(() => {
      fectLendById();
    }, [loader]);


 const hdlClick = (items,loader) => {
  // console.log(items,+amount)

  handleAddLend(items,+amount)
  setLoader(!loader)
 }
 
  const loadMoreItems = () => {
    const countItemInload = 5;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + countItemInload);
      setIsLoadingMore(false);
    }, 1000);
  };

  return (
    <>
      <div className="flex flex-wrap gap-11 justify-center pt-32 py-30 pb-7">
        {loanData.length > 0 ? (
          <>
            {loanData.slice(0, visibleItems).map((items) => (
              <motion.div
                key={items?.id}
                className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Card className="w-[318px] hover:shadow-xl">
                  <Link
                    to={`/loanDetail?loan=${encodeURIComponent(
                      JSON.stringify(items)
                    )}`}
                  >
                    <CardHeader className="p-0">
                      <img
                        // src={Avata[`avatar${items?.borrower?.id}`]}
                        className="bg-green-200 rounded-t-lg h-[250px] object-contain"
                        // style={{
                        //   backgroundImage: `url(${
                        //     Avata[`avatar${items?.borrower?.id}`]
                        //   })`,
                        // }}
                        src={items?.borrower?.ImgUrl ? `${backendUrl}${items?.borrower?.ImgUrl}` : `${Avata[`avatar${items?.borrower?.id}`]}`}
                      />
                    </CardHeader>
                  </Link>
                  <CardContent className='pb-1'>
                    <div className="flex pt-2">
                      <h1 className="text-xl font-medium">
                        {items?.borrower?.firstname} {items?.borrower?.lastname}
                      </h1>
                    </div>
                    <CardDescription className="h-14 text-lg">
                      {items?.purpose} 
                    </CardDescription>
                    <div className="flex flex-col">
                    <div className="flex gap-2">
                      <Badge>{items?.categories?.categorie_name}</Badge>
                      <Badge variant="secondary">
                        {items?.businessAddress?.province_name}
                      </Badge>
                    </div>
                    <div className="py-3">
                    {amountAllId.some((el) => el.loan_id === items.id) ? (
                      amountAllId.map((el) =>
                        el.loan_id === items.id ? (
                          <div key={el.loan_id}>
                            <h3>
                              {(
                                items?.total_amount - el._sum.amount
                              ).toLocaleString()}{" "}
                              THB to go
                            </h3>
                            <Progress value={((el._sum.amount / items?.total_amount) * 100).toFixed(2)} />
                          </div>
                        ) : null
                      )
                    ) : (
                      <>
                        <h3>{items?.total_amount.toLocaleString()} THB to go</h3>
                        <Progress value={0} />
                      </>
                    )}
                    </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-1 justify-end">
                    <Select onValueChange={setAmount}>
                      <SelectTrigger className="w-2/3">
                        <SelectValue defaultValue="500" placeholder="500 THB" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500">500 THB</SelectItem>
                        <SelectItem value="1000">1,000 THB</SelectItem>
                        <SelectItem value="1500">1,500 THB</SelectItem>
                      </SelectContent>
                    </Select>
                    {lend.some((el) => el.loan_id === items.id) ? (
                      <button disabled className="border p-2 rounded-lg">
                        Lended
                      </button>
                    ) : (
                      <Button
                        className="w-1/3 bg-green-500"
                        onClick={() => hdlClick(items, loader)}
                      >
                        Lend
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </>
        ) : (
          <Card className="w-[318px] h-[500px] text-2xl border-none flex justify-center items-center shadow-none mb-7">
            Search not found
          </Card>
        )}
      </div>
      <div className="flex pb-3 justify-center">
        {visibleItems < loanData.length && (
          <Button onClick={loadMoreItems} disabled={isLoadingMore}>
            {isLoadingMore ? "Loading..." : "Load More"}
          </Button>
        )}
      </div>
    </>

  );
}
