"use client";

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./CellAction";

export type ReceiveColumnsType = {
    file_id: string;
    file_name: string;
    recipient_email: string;
    expiration_date: string;
    created_at: string;
};

export function useReceiveColumns({ token }: { token: string | null }): ColumnDef<ReceiveColumnsType>[] {

    return [
        {
            accessorKey: "file_id",
            header: 'ID',
        },
        {
            accessorKey: 'file_name',
            header: 'File Name',
        },
        {
            accessorKey: 'sender_email',
            header: 'Sender Email',
        },
        {
            accessorKey: 'expiration_date',
            header: 'Expiration Date',
            cell: ({ row }) => {
                const date = new Date(row.original.expiration_date);
                return date.toLocaleDateString('en-US', {
                    weekday: 'short', 
                    day: '2-digit',  
                    month: 'short',   
                    year: 'numeric',  
                });
            },
        },
        {
            accessorKey: 'created_at',
            header: 'Created At',
            cell: ({ row }) => {
                const date = new Date(row.original.created_at);
                return date.toLocaleDateString('en-US', {
                    weekday: 'short', 
                    day: '2-digit',  
                    month: 'short',   
                    year: 'numeric', 
                });
            },
        },
        {
            accessorKey: 'actions',
            header: "Actions",
            cell: ({ row }) => <CellAction data={row.original} token={token} />
        }
    ];
}
