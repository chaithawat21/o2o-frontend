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
import img from "../assets/images/avatar/avatar02.png";
import { Progress } from "@/components/ui/progress";
import { useSearchData } from "../utils/serviceAPI/searchServices";
import { useUser } from "../utils/serviceAPI/backendService-zustend";

export default function CardLoanProfile() {
  const loanData = useSearchData((state) => state.loanData);
  const lend = useUser((state) => state.lendUser);
  const loader = useUser((state) => state.loader);
  const fectLendById = useUser((stete) => stete.fectLendById);
  const handleAddLend = useUser((stete) => stete.handleAddLend);
  const fetchLoanDataById = useSearchData((state) => state.fetchLoanDataById);

  useEffect(() => {
    fectLendById();
  }, [loader]);

  console.log(loanData);

  return (
    <div className="flex flex-wrap gap-4 justify-center py-32">
      {loanData.length > 0 ? loanData.map((items) => (
        <Card className="w-[318px]" key={items?.id}>
          <Link to={`/loanDetail?loan=${encodeURIComponent(JSON.stringify(items))}`}>
            <CardHeader className="p-0" >
              <img src={img} className="w-full bg-green-200 rounded-t-lg"></img>
            </CardHeader>
          </Link>
          <CardContent>
            <div className="flex py-2">
              <h1 className="text-xl">
                {items?.borrower?.firstname} {items?.borrower?.lastname}
              </h1>
            </div>
            <CardDescription className='pb-2'>{items?.purpose}</CardDescription>
            <div className="flex gap-2">
              <Badge>{items?.categories?.categorie_name}</Badge>
              <Badge variant="secondary">
                {items?.businessAddress?.province_name}
              </Badge>
            </div>
            <div className="py-2">
              <h3>{(items?.total_amount).toLocaleString()} THB to go </h3>
              <Progress value={Math.random(90) * 100} />
            </div>
          </CardContent>
          <CardFooter className="flex gap-1 justify-end">
            <Select>
              <SelectTrigger className="w-2/3">
                <SelectValue defaultValue="500" placeholder='500 THB'/>
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
                className="w-1/3 bg-green-500 "
                onClick={() => handleAddLend(items, loader)}
              >
                Lend
              </Button>
            )}
          </CardFooter>
        </Card>
      )):<><Card className="w-[318px] h-[500px] text-2xl border-none flex justify-center items-center shadow-none">ไม่พบการค้นหา</Card></>}
    </div>
  );
}
