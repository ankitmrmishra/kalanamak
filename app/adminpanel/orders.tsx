"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

type Order = {
  id: number;
  amount: number;
  weight: string;
  status: string;
  price: number;
  UserId: number;
  AddressId: string;
};

type SortKey = keyof Order;
type SortOrder = "asc" | "desc";

export function OrderTable({ orders }: { orders: Order[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [search, setSearch] = useState("");

  const sortedOrders = [...orders]
    .sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    })
    .filter((order) =>
      Object.values(order).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    );

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              onClick={() => handleSort("id")}
              className="cursor-pointer"
            >
              ID <ArrowUpDown className="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead
              onClick={() => handleSort("amount")}
              className="cursor-pointer"
            >
              Amount <ArrowUpDown className="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead
              onClick={() => handleSort("weight")}
              className="cursor-pointer"
            >
              Weight <ArrowUpDown className="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead
              onClick={() => handleSort("status")}
              className="cursor-pointer"
            >
              Status <ArrowUpDown className="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead
              onClick={() => handleSort("price")}
              className="cursor-pointer"
            >
              Price <ArrowUpDown className="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead
              onClick={() => handleSort("UserId")}
              className="cursor-pointer"
            >
              User ID <ArrowUpDown className="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead
              onClick={() => handleSort("AddressId")}
              className="cursor-pointer"
            >
              Address ID <ArrowUpDown className="ml-2 h-4 w-4" />
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.weight}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>{order.UserId}</TableCell>
              <TableCell>{order.AddressId}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() =>
                        navigator.clipboard.writeText(order.id.toString())
                      }
                    >
                      Copy order ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View customer</DropdownMenuItem>
                    <DropdownMenuItem>View order details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
