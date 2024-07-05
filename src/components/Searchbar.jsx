import React from "react";
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
import { useState } from "react";


// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ];

export default function searchbar() {
  const [input, setInput] = useState({
    search: null,
    provinces : null,
    geographies : null
  });
  
  

  const handleChange = (e) => {
    setInput((prv) => ({...prv, [e.target.name]: e.target.value}))
}

  return (
    <div className="flex gap-2 p-5 ">
      <Command className="w-[500px] ">
        <CommandInput 
          placeholder="Type a command or search..." 
        />
        <CommandList >
          
          <CommandEmpty>ไม่พบผลการค้นหา</CommandEmpty>
          <CommandGroup heading="ผลการค้นหา">
            <CommandItem>กรุงเทพ</CommandItem>
            <CommandItem>ขอนแก่น</CommandItem>
            <CommandItem>เชียงราย</CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="จังหวัด" />
        </SelectTrigger>
        <SelectContent
          name='provinces'
          value={input.provinces}
          onChange={handleChange}>
          {provinces.map((items) => (
            <SelectItem key={items.id} value={items.name_th}>
              {items.name_th}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="ภูมิภาค" />
        </SelectTrigger>
        <SelectContent
          name='geographies'
          value={input.geographies}
          onChange={handleChange}
          >
          {geographies.map((items) => (
            <SelectItem key={items.id} value={items.name}>
              {items.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
     {console.log(input)}
    </div>
  );
}
