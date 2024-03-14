"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ChangeEvent } from "react";
import { read } from "xlsx";

function ResourcesPage() {
  const handleFileAsync = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const data = await file.arrayBuffer();
    const workbook = read(data);
    console.log("workbook", workbook.Sheets[workbook.SheetNames[0]]);
  };
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <div className="text-center mx-auto max-w-sm items-center gap-1.5">
        <Label htmlFor="excel">上传资源清单(excel)</Label>
        <Input
          id="excel"
          type="file"
          accept=".xls, .xlsx"
          onChange={handleFileAsync}
        />
      </div>
    </div>
  );
}

export default ResourcesPage;
