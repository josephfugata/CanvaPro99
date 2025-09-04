"use client"

import * as React from "react"
import { Upload } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const FileInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  const [fileName, setFileName] = React.useState<string | null>(null)
  const internalRef = React.useRef<HTMLInputElement>(null)
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileName(file ? file.name : null)
    props.onChange?.(e)
  }

  return (
    <div className={cn("relative", className)}>
      <Input
        type="text"
        readOnly
        value={fileName || "No file selected"}
        className="pr-[120px] text-muted-foreground"
        placeholder="Upload your screenshot"
        aria-label="Selected file"
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
        onChange={handleFileChange}
        {...props}
      />
    </div>
  )
})
FileInput.displayName = "FileInput"

export { FileInput }
