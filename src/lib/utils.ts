export const formatDate = (date: string) => {
  if (!date) return null;
  const parts = date.split("-");
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ];
  const day = parts[2];
  const month = months[parseInt(parts[1]) - 1];
  const year = parts[0];
  return `${month} ${day}, ${year}`;
};
