
"use client"

import * as React from "react"
import { Upload } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const FileInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, value, ...props }, ref) => {
  const internalRef = React.useRef<HTMLInputElement>(null)
  
  // Combine refs
  const combinedRef = (node: HTMLInputElement) => {
    if (typeof ref === "function") {
      ref(node)
    } else if (ref) {
      ref.current = node
    }
    if (internalRef) {
      ;(internalRef as React.MutableRefObject<HTMLInputElement | null>).current = node
    }
  }

  const handleButtonClick = () => {
    internalRef.current?.click()
  }

  // Determine file name from `value` which can be FileList or string
  const fileName = React.useMemo(() => {
    if (value instanceof FileList && value.length > 0) {
      return value[0].name;
    }
    if (typeof value === 'string') {
      return value;
    }
    return null;
  }, [value]);


  return (
    <div className={cn("relative", className)}>
      <Input
        type="text"
        readOnly
        value={fileName || "No file selected"}
        className="pr-[120px] text-muted-foreground"
        placeholder="Upload your screenshot"
        aria-label="Selected file"
        onClick={handleButtonClick}
      />
      <Button
        type="button"
        variant="outline"
        className="absolute top-1/2 right-1 -translate-y-1/2 h-[calc(100%-0.5rem)] px-4"
        onClick={handleButtonClick}
      >
        <Upload className="mr-2 h-4 w-4" />
        Choose File
      </Button>
      <Input
        type="file"
        ref={combinedRef}
        className="hidden"
        {...props}
      />
    </div>
  )
})
FileInput.displayName = "FileInput"

export { FileInput }

    