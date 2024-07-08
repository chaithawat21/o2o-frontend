import React, { useState,useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import provinces from "../utils/provinces";
import geographies from "../utils/geographies";
import { Value } from "@radix-ui/react-select";

export default function searchbar() {
  const [input, setInput] = useState({
    search: null,
    provinces : null,
    geographies : null
  });
 
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput((prv) => ({...prv, [e.target.name]: e.target.value}))
}


  return (
    <div className="flex gap-2 p-5 ">
      <Command className="w-[500px]" onValueChange={(value)=> setInput((prv) => ({...prv, "search": value}))}>
        <CommandInput 
          placeholder="Type a command or search..." 
        />
        <CommandList>
          {input.search?
          <>
          <CommandEmpty>ไม่พบผลการค้นหา</CommandEmpty>
          <CommandGroup heading="ผลการค้นหา">
            <CommandItem value=''>กรุงเทพ</CommandItem>
            <CommandItem value=''>ขอนแก่น</CommandItem>
            <CommandItem value=''>เชียงราย</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          </>:""}
        </CommandList>
      </Command>
      <Select onValueChange={(value)=> setInput((prv) => ({...prv, "geographies": value}))}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="ภูมิภาค" />
        </SelectTrigger >
        <SelectContent >
          {geographies.map((items) => (
            <SelectItem key={items.id} value={items.name}>
              {items.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {!input.geographies?
      <>
      <Select onValueChange={(value)=> setInput((prv) => ({...prv, "provinces": value}))} disabled>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="จังหวัด"/>
        </SelectTrigger>
        <SelectContent>
          {provinces.map((items) => (
            <SelectItem key={items.id} value={items.name_th}>
              {items.name_th}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      </>:
      <>
      <Select onValueChange={(e)=> setInput((prv) => ({...prv, "provinces": e}))}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="จังหวัด"/>
        </SelectTrigger>
        <SelectContent>
          {provinces.map((items) => (
            <SelectItem key={items.id} value={items.name_th}>
              {items.name_th}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      </>}
     {console.log(Command)}
    </div>
  );
}
