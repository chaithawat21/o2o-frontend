import React, { useState, useEffect } from "react";
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

export default function searchbar() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState({
    search: null,
    geographies: null,
    provinces: null,
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };
  const fillterProvince = provinces.filter(
    (province) => province.geography_id === 2
  );

  console.log(input.geographies);
  console.log("fillterProvince = ", fillterProvince);

  const searchItems = [
    {
      value: "thailand",
    },
    {
      value: "google",
    },
    {
      value: "ples",
    },
  ];

  return (
    <div className="flex gap-2 p-5">
      <Command className="w-[500px]">
        <CommandInput />
        <CommandList className="">
          <CommandEmpty>not Result</CommandEmpty>
          <CommandGroup heading="Result">
            {searchItems.map((searchItem) => (
              <CommandItem
                key={searchItem.id}
                value={searchItem.value}
                onSelect={(value) => {
                  setInput((prv) => ({ ...prv, search: value }));
                }}
              >
                {searchItem.value}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
      <Select
         onValueChange={(value) => setInput((prv) => ({ ...prv, "geographies": value }))}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="ภูมิภาค"/>
        </SelectTrigger>
        <SelectContent>
          {geographies.map((items) => (
            <SelectItem key={items.id} value={items.name}>
              {items.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {!input.geographies ? (
        <>
          <Select
            onValueChange={(value) =>
              setInput((prv) => ({ ...prv, "provinces": value }))
            }
            disabled
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="จังหวัด" />
            </SelectTrigger>
            <SelectContent>
              {provinces.map((items) => (
                <SelectItem key={items.id} value={items.name_th}>
                  {items.name_th}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </>
      ) : (
        <>
          <Select
            onValueChange={(value) => setInput((prv) => ({ ...prv, "provinces": value }))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="จังหวัด" />
            </SelectTrigger>
            <SelectContent>
              {provinces.map((items) => (
                <SelectItem key={items.id} value={items.name_th}>
                  {items.name_th}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </>
      )}
      {console.log(input)}
    </div>
  );
}
