import type {DataTableProps} from "./types";

export function DataTable<T>({
                                 data,
                                 columns,
                                 rowKey,
                                 loading,
                                 emptyMessage = "داده‌ای یافت نشد",
                                 onRowClick,
                             }: DataTableProps<T>) {

    const alignClass = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    function TableSkeleton({
                               rows = 10,
                               columns = 6,
                           }: {
        rows?: number;
        columns?: number;
    }) {
        return (
            <div className="overflow-hidden rounded-2xl border bg-white">
                <table className="w-full">
                    <tbody>
                    {Array.from({length: rows}).map((_, row) => (
                        <tr key={row}>
                            {Array.from({length: columns}).map((_, col) => (
                                <td
                                    key={col}
                                    className="px-4 py-4"
                                >
                                    <div
                                        className="
                                            h-5
                                            animate-pulse
                                            rounded
                                            bg-gray-200
                                        "
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }

    if (loading) {
        return (
            <TableSkeleton
                rows={10}
                columns={columns.length}
            />
        );
    }

    return (
        <div className="overflow-hidden rounded-lg bg-white">
            <div className="h-[80vh] overflow-auto" dir={'ltr'}>
                <table className="
                            table-fixed
                            w-full
                            border-collapse
                        " dir={'rtl'}>
                    <colgroup>
                        {columns.map((column) => (
                            <col
                                key={String(column.key)}
                                style={{
                                    width: column.width
                                        ? `${column.width}px`
                                        : undefined,
                                }}
                            />
                        ))}
                    </colgroup>
                    <thead>
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={String(column.key)}
                                className={`
                                    sticky
                                    top-0
                                    z-10
                                    bg-gray-50
                                    px-4
                                    py-4
                                    font-semibold
                                    text-gray-700
                                    ${alignClass[column.align ?? "right"]}
                                `}
                            >
                                {column.title}
                            </th>
                        ))}
                    </tr>
                    </thead>

                    <tbody>
                    {data.length === 0 && (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="py-10 text-center"
                            >
                                {emptyMessage}
                            </td>
                        </tr>
                    )}

                    {data.map((row, rowIndex) => (
                        <tr
                            key={String(row[rowKey])}
                            onClick={() => onRowClick?.(row)}
                            className="
                                    transition-colors
                                    hover:bg-gray-50
                                    border-y-2
                                    border-gray-200
                                    first:border-t-0
                                    last:border-b-0
                                "
                        >

                            {columns.map((column) => {

                                const value =
                                    row[
                                        column.key as keyof T
                                        ];

                                return (
                                    <td
                                        key={String(column.key)}
                                        className={`
                                        px-4
                                        py-4
                                        ${alignClass[column.align ?? "right"]}
                                    `}
                                    >
                                        <div
                                            className="
                                                overflow-hidden
                                                text-ellipsis
                                                whitespace-nowrap
                                            "
                                            title={String(value ?? "")}
                                        >
                                            {column.render
                                                ? column.render(
                                                    value,
                                                    row,
                                                    rowIndex
                                                )
                                                : String(value ?? "")}
                                        </div>
                                    </td>
                                );
                            })}

                        </tr>
                    ))}

                    </tbody>

                </table>

            </div>
        </div>
    );
}