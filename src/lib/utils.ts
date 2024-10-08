import { toast } from "@/components/ui/use-toast";
import { EntityError } from "@/lib/http";
import { type ClassValue, clsx } from "clsx"
import { UseFormSetError } from "react-hook-form";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const normalizePath = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path;
}

export const handleErrorApi = ({ error, setError, duration }: {
  error: any,
  setError?: UseFormSetError<any>,
  duration?: number
}) => {
  if (error instanceof EntityError && setError) {
    error.payload.errors.map(item => {
      setError(item.field, {
        type: 'server',
        message: item.message
      })
    })
  } else {
    toast({
      title: 'Lỗi',
      description: error?.payload?.message ?? 'Lỗi không xác định',
      duration: duration ?? 5000,
      variant: 'destructive'
    })
  }
}