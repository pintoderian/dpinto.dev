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

export const calculateAge = (birthDate: string): number => {
  const birthDateObj: Date = new Date(birthDate);
  const currentDate: Date = new Date();

  let age: number = currentDate.getFullYear() - birthDateObj.getFullYear();

  if (
    birthDateObj.getMonth() > currentDate.getMonth() ||
    (birthDateObj.getMonth() === currentDate.getMonth() &&
      birthDateObj.getDate() > currentDate.getDate())
  ) {
    age -= 1;
  }

  return age;
};
