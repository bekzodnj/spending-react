export function getFormattedTime(dateISOString = ""): string {
  const date = new Date(dateISOString);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const amOrPm = 12 >= hours ? "AM" : "PM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
}

export function getFormattedDate(dateISOString = ""): string {
  const date = new Date(dateISOString);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[monthIndex];
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${formattedDay}, ${monthName}, ${year}`;
}

export function getFormattedAmount(amount = "", currency = "") {
  let formattedAmount = "";
  if (currency === "HUF") {
    formattedAmount = amount + " " + currency;
  } else if (currency === "USD") {
    formattedAmount = `$${amount}`;
  }

  return formattedAmount;
}
