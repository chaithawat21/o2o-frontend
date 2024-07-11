import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import img from "../assets/images/avatar/avatar01.png";
import { Progress } from "@/components/ui/progress";
import { useSearchData } from "../utils/serviceAPI/searchServices";


export default function CardLoanProfile() {
  const loanData = useSearchData((state) => state.loanData);
  
  console.log(loanData);
  return (
    <div className="flex flex-wrap gap-4 justify-center py-32">
      {loanData.map((items) => (
        <Card className="w-[318px]" key={items.id}>
          <CardHeader>
            <img src={img} className="w-[315px] h-[234px] bg-green-200"></img>
            <CardDescription>
              {items.purpose}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Badge>{items.categorie_id}</Badge>
            </div>
            <div className="py-2">
              <h3>{items.total_amount} THB to go </h3>
              <Progress value={20} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button asChild className="w-1/3 bg-green-500 ">
              <Link to="/loanDetail" >View Loan</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

{
  /* <Select>
            <SelectTrigger className="w-2/3">
              <SelectValue placeholder="500 THB" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="500">500 THB</SelectItem>
              <SelectItem value="1000">1000 THB</SelectItem>
              <SelectItem value="1500">1500 THB</SelectItem>
            </SelectContent>
          </Select> */
}
