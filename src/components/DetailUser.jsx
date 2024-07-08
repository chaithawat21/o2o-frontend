import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import profileImg from "../assets/images/avatar/avatar01.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function DetailUser() {
  return (
    <div className="flex flex-col w-[500px] gap-5 my-5">
      <Card className="w-full">
        <CardHeader className="flex flex-row gap-5">
          <Avatar className='w-20 h-20'>
            <AvatarImage src={profileImg} alt="@shadcn" />
          </Avatar>
          <div className="flex flex-col w-full gap-2">
            <CardTitle>Kuli KeyGe</CardTitle>
            <CardDescription>
              <Progress value={20} />
              <div className="flex justify-between">
                <h2>{13} day</h2>
                <h2>THB {600} togo</h2>
              </div>
              <div className="flex justify-between">
                <div>REMAINING</div>
                <div>{20}% FUNDED</div>
              </div>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            omnis officiis id provident! Perferendis nulla recusandae ad omnis
            amet exercitationem adipisci maiores, beatae animi neque ipsum, est,
            porro sint perspiciatis.
          </p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <div className="border p-2">region</div>
          <div className="border p-2">region</div>
        </CardFooter>
      </Card>
      <div>
        {/* <img src="" alt="" /> */}
        <h1 className="flex flex-col w-full h-[250px] border items-center justify-center text-[100px]">
          IMG
        </h1>
        <div className="flex flex-col gap-3 mt-5">
          <h1 className="text-xl">Story</h1>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            aut perferendis, fugiat eos a adipisci, doloremque recusandae nisi
            esse qui architecto laboriosam cumque voluptatibus quaerat voluptas.
            Earum ducimus consequuntur dolorem!
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            aut perferendis, fugiat eos a adipisci, doloremque recusandae nisi
            esse qui architecto laboriosam cumque voluptatibus quaerat voluptas.
            Earum ducimus consequuntur dolorem!
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl">Pathum Thani</h1>
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl">THB 54,800</h1>
            <h3>Average annual income (THB)</h3>
          </div>
          <div>
            <h1 className="text-2xl">35</h1>
            <h3>Loans currently fundraising</h3>
          </div>
        </div>
        <Button asChild className="w-fit bg-green-500">
        <Link to="/support">Find more borrowers in United States</Link>
      </Button>
      </div>
    </div>
  );
}
