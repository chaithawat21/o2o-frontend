import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { useSearchData } from "../utils/serviceAPI/searchServices";

export default function searchbar() {
  const searchInfo = useSearchData((state) => state.searchInfo);
  const inputCheck = useSearchData((state) => state.inputCheck);
  const fillterP = useSearchData((state) => state.fillterProvince);
  const fetchSearchData = useSearchData((state) => state.fetchSearchData);
  const fetchLoanData = useSearchData((state)=> state.fetchLoanData)
  const checkValue = useSearchData((state) => state.checkValue);
  const hdlChenge = useSearchData((state) => state.hdlChange);
  
  console.log(searchInfo);
  useEffect(() => {
    fetchSearchData()
    fetchLoanData()
  }, []);

  return (
    <div className="flex gap-2 p-5">
      <Command>
        <CommandInput placeholder="Type a command or search..." onValueChange={((value)=>checkValue(value))}/>
        <CommandList>
        {inputCheck && <><CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Catagoly">
            {searchInfo?.categories?.map((items)=>(
              <CommandItem key={items.id} value={items.categorie_name}>{items.categorie_name}</CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Regions">
            {searchInfo?.regions?.map((items)=>(
              <CommandItem key={items.id} value={items.region_name}>{items.region_name}</CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="provinces">
            {searchInfo?.provinces?.map((items)=>(
              <CommandItem key={items.id} value={items.province_name}>{items.province_name}</CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator /></>}
        </CommandList>
      </Command>
      <Select
        onValueChange={(value) =>{
          hdlChenge(value,searchInfo.provinces)
        } }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="ภูมิภาค" />
        </SelectTrigger>
        <SelectContent>
          {searchInfo?.regions?.map((items) => (
            <SelectItem key={items?.id} value={items?.id}>
              {items?.region_name}
            </SelectItem>
          ))} 
        </SelectContent>
      </Select>
      <Select
        // onValueChange={(value) =>
        //   setInput((prv) => ({ ...prv, provinces: value }))
        // }
      >
        <SelectTrigger className="w-[300px]">
          <SelectValue placeholder="จังหวัด" />
        </SelectTrigger>
        <SelectContent>
          {fillterP.map((items) => (
            <SelectItem key={items?.id} value={items?.province_name}>
              {items?.province_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
