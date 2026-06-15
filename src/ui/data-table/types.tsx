import React from "react";

export interface Column<T> {
    key: keyof T | string;
    title: string;

    width?: string;

    align?: "left" | "center" | "right";

    sortable?: boolean;

    render?: (
        value: unknown,
        row: T,
        index: number
    ) => React.ReactNode;
}

export interface DataTableProps<T> {
    data: T[];

    columns: Column<T>[];

    loading?: boolean;

    emptyMessage?: string;

    rowKey: keyof T;

    onRowClick?: (row: T) => void;
}