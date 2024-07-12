import React from "react";
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

export default function searchbar() {
  const loanData = useSearchData((state)=>state.loanData)
  const searchInfo = useSearchData((state) => state.searchInfo);
  const regionData = useSearchData((state) => state.regionData);
  const provinceData = useSearchData((state) => state.provinceData);
  const inputCheck = useSearchData((state) => state.inputCheck);
  const fillterProvinceValue = useSearchData((state) => state.fillterProvinceValue);
  const checkValue = useSearchData((state) => state.checkValue);
  const FillterProvince = useSearchData((state) => state.FillterProvince);
  const setFillter = useSearchData((state) => state.setFillter);
  const fetchLoanData = useSearchData((state)=> state.fetchLoanData)
  const selectByFillter = useSearchData((state)=>state.SelectByFillter)

  console.log();
  

  return (
    <div className="flex gap-2 p-5">
      <Command>
        <CommandInput
          placeholder="Type a command or search..."
          onValueChange={(value) => checkValue(value)}
        />
        <CommandList>
          {inputCheck && (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Loan">
                {loanData?.map((items) => (
                  <CommandItem key={items.id} value={items.id}>
                    {items.borrower.firstname} {items.borrower.lastname} 
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Catagoly">
                {searchInfo?.categories?.map((items) => (
                  <CommandItem key={items.id} value={items.categorie_name}>
                    {items.categorie_name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="Regions">
                {searchInfo?.regions?.map((items) => (
                  <CommandItem key={items.id} value={items.region_name}>
                    {items.region_name}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandGroup heading="provinces">
                {searchInfo?.provinces?.map((items) => (
                  <CommandItem key={items.id} value={items.province_name}>
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
          selectByFillter(value,'region')
          FillterProvince(value, searchInfo.provinces);
        }}
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

      {regionData.length === 0 ?<>
        <Select onValueChange={(value) => selectByFillter(value, "province")} disabled >
        <SelectTrigger className="w-[300px]">
          <SelectValue placeholder="จังหวัด" />
        </SelectTrigger>
        <SelectContent>
          {fillterProvinceValue.map((items) => (
            <SelectItem key={items?.id} value={items?.province_name}>
              {items?.province_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      </>:<>
      <Select onValueChange={(value) => selectByFillter(value,"province")}>
        <SelectTrigger className="w-[300px]">
          <SelectValue placeholder="จังหวัด" />
        </SelectTrigger>
        <SelectContent>
          {fillterProvinceValue.map((items) => (
            <SelectItem  key={items?.id} value={items?.id}>
              {items?.province_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      </> 
      }
    </div>
  );
}
