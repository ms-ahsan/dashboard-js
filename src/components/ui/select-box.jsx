import * as React from "react";
import { ChevronDown, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

const SelectBox = React.forwardRef(function SelectBox(
  {
    inputPlaceholder,
    emptyPlaceholder,
    placeholder,
    className,
    options = [], 
    value = multiple ? [] : "", 
    onChange,
    multiple = false,
  },
  ref
) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  // Handle item selection
  const handleSelect = (selectedOption) => {
    if (multiple) {
      const newValue = value.includes(selectedOption)
        ? value.filter((v) => v !== selectedOption)
        : [...value, selectedOption];
      onChange(newValue);
    } else {
      onChange(selectedOption);
      setIsOpen(false)
    }
  };

  // Clear selected value(s)
  const handleClear = () => {
    onChange?.(multiple ? [] : "");
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex min-h-[36px] cursor-pointer items-center justify-between rounded-md border px-3 py-1 data-[state=open]:border-ring",
            className
          )}
        >
          <div
            className={cn(
              "items-center gap-1 overflow-hidden text-sm",
              multiple
                ? "flex flex-grow flex-wrap"
                : "inline-flex whitespace-nowrap"
            )}
          >
            {/* Display selected value(s) */}
            {value && (Array.isArray(value) ? value.length > 0 : value) ? (
              multiple ? (
                options
                  ?.filter((option) =>
                    Array.isArray(value) && value.includes(option.value)
                  )
                  .map((option) => (
                    <span
                      key={option.value}
                      className="inline-flex items-center gap-1 rounded-md border py-0.5 pl-2 pr-1 text-xs font-medium text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <span>{option.label}</span>
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelect(option.value);
                        }}
                        className="flex items-center rounded-sm px-[1px] text-muted-foreground/60 hover:bg-accent hover:text-muted-foreground"
                      >
                        <X className="size-4"/>
                      </span>
                    </span>
                  ))
              ) : (
                options?.find((opt) => opt.value === value)?.label
              )
            ) : (
              <span className="mr-auto text-muted-foreground">
                {placeholder}
              </span>
            )}
          </div>
          {/* Action icons */}
          <div className="flex items-center self-stretch pl-1 text-muted-foreground/60 hover:text-foreground [&>div]:flex [&>div]:items-center [&>div]:self-stretch">
            {value && (Array.isArray(value) ? value.length > 0 : value) ? (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  handleClear();
                }}
              >
                <X className="size-4" />
              </div>
            ) : (
              <div>
                <ChevronDown className="size-4" />
              </div>
            )}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
      >
        <Command>
          {/* Search input */}
          <div className="relative">
            <CommandInput
              value={searchTerm}
              onValueChange={(e) => setSearchTerm(e)}
              ref={ref}
              placeholder={inputPlaceholder ?? "Search..."}
              className="h-9"
            />
            {searchTerm && (
              <div
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-muted-foreground hover:text-foreground"
                onClick={() => setSearchTerm("")}
              >
                <X className="size-4" />
              </div>
            )}
          </div>
          <CommandEmpty>
            {emptyPlaceholder ?? "No results found."}
          </CommandEmpty>
          {/* Options list */}
          <CommandGroup>
            <CommandList>
              <ScrollArea>
                <div className="max-h-64">
                  {options?.map((option) => {
                    const isSelected =
                      multiple && Array.isArray(value)
                        ? value.includes(option.value)
                        : value === option.value;

                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => handleSelect(option.value)}
                      >
                        {multiple && (
                          <div
                            className={cn(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              isSelected
                                ? "bg-primary text-primary-foreground"
                                : "opacity-50 [&_svg]:invisible"
                            )}
                          >
                            <Check />
                          </div>
                        )}
                        <span>{option.label}</span>
                        {!multiple && option.value === value && (
                          <Check
                            className={cn(
                              "ml-auto",
                              option.value === value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        )}
                      </CommandItem>
                    );
                  })}
                </div>
              </ScrollArea>
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

export default SelectBox;
