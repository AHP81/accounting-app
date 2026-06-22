import moment from "jalali-moment";

// میلادی امروز
export function getTodayGregorian() {
    const d = new Date();

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${year}/${month}/${day}`;
}

// شمسی امروز
export function getTodayJalali() {
    return moment().locale("fa").format("YYYY/MM/DD");
}