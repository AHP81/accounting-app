type Props = {
    value: number;
};

export default function MoneyValue({ value }: Props) {
    if (value > 0) {
        return <span dir={'ltr'} className="text-green-600">+{value.toLocaleString()}</span>;
    }

    if (value < 0) {
        return <span dir={'ltr'} className="text-red-600">{value.toLocaleString()}</span>;
    }

    return <span dir={'ltr'} className="text-gray-900"></span>;
}