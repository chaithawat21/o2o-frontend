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
import { useSearchData } from "../utils/serviceAPI/searchServices";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  
  const loanData = useSearchData((state) => state.loanData);
  const searchInfo = useSearchData((state) => state.searchInfo);
  const regionData = useSearchData((state) => state.regionData);
  const inputCheck = useSearchData((state) => state.inputCheck);
  const fillterProvinceValue = useSearchData(
    (state) => state.fillterProvinceValue
  );
  const checkValue = useSearchData((state) => state.checkValue);
  const FillterProvince = useSearchData((state) => state.FillterProvince);
  const selectByFillter = useSearchData((state) => state.SelectByFillter);

  const handleSelect = (value, type, displayValue) => {
    console.log(`${type}: ${value}`);
    setInputValue(displayValue);  // Set the input value to the display value of the selected item
    selectByFillter(value, type);
  };

  return (
    <div className="flex gap-2 p-5">
      <Command onValueChange={(value) => console.log(value)}>
        <CommandInput
          placeholder="search..."
          value={inputValue}
          onValueChange={(value) => {
            setInputValue(value); // Update input value as user types
            checkValue(value);
          }}
        />
        <CommandList>
          {inputCheck && (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Loan">
                {loanData?.map((items) => (
                  <CommandItem
                    key={items.id}
                    value={items.id}
                    onSelect={() => handleSelect(items.id, "loan", `${items.borrower.firstname} ${items.borrower.lastname}`)}
                  >
                    {items.borrower.firstname} {items.borrower.lastname}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Category">
                {searchInfo?.categories?.map((items) => (
                  <CommandItem
                    key={items.id}
                    value={items.id}
                    onSelect={() => handleSelect(items.id, "categorie", items.categorie_name)}
                  >
                    {items.categorie_name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Regions">
                {searchInfo?.regions?.map((items) => (
                  <CommandItem
                    key={items.id}
                    value={items.id}
                    onSelect={() => handleSelect(items.id, "region", items.region_name)}
                  >
                    {items.region_name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Provinces">
                {searchInfo?.provinces?.map((items) => (
                  <CommandItem
                    key={items.id}
                    value={items.id}
                    onSelect={() => handleSelect(items.id, "province", items.province_name)}
                  >
                    {items.province_name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          )}
        </CommandList>
      </Command>
      <Select
        onValueChange={(value) => {
          selectByFillter(value, "region");
          FillterProvince(value, searchInfo.provinces);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Regions" />
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
        onValueChange={(value) => selectByFillter(value, "province")}
        disabled={regionData.length === 0}
      >
        <SelectTrigger className="w-[300px]">
          <SelectValue placeholder="ProvinceValue" />
        </SelectTrigger>
        <SelectContent>
          {fillterProvinceValue.map((items) => (
            <SelectItem key={items?.id} value={items?.id}>
              {items?.province_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
