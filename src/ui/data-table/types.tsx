import type {ReactNode} from "react";

export interface Column<T> {
    key: keyof T;
    title: string;
    width?: string;
    align?: "left" | "center" | "right";
    sortable?: boolean;
    render?: (
        value: T[keyof T],
        row: T,
        index: number
    ) => ReactNode;
}

export interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    loading?: boolean;
    emptyMessage?: string;
    rowKey: keyof T;
    onRowClick?: (row: T) => void;
}