import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function DetailPayShare() {
  return (
    <div className="w-[400px] py-5 pt-10">
      <div className="pb-5">
        <h1>Help fund this loan</h1>
        <div className="flex flex-row py-3">
          <Select>
            <SelectTrigger className="w-1/3">
              <SelectValue placeholder="500 THB" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="500">500 THB</SelectItem>
              <SelectItem value="1000">1000 THB</SelectItem>
              <SelectItem value="1500">1500 THB</SelectItem>
            </SelectContent>
          </Select>
          <Button asChild className="w-2/3 bg-green-500">
            <Link to="/support">Lend</Link>
          </Button>
        </div>
        <Button asChild className="w-full bg-white text-black border">
          <Link to="/support">Share</Link>
        </Button>
      </div>
      <hr/>
    </div>
  );
}

export default DetailPayShare;
