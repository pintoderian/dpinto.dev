export const calculateAge = (birthDate: string): number => {
  const birthDateObj: Date = new Date(birthDate);
  const currentDate: Date = new Date();

  let age: number = currentDate.getFullYear() - birthDateObj.getFullYear();

  // Check if birthday has occurred this year
  if (
    birthDateObj.getMonth() > currentDate.getMonth() ||
    (birthDateObj.getMonth() === currentDate.getMonth() &&
      birthDateObj.getDate() > currentDate.getDate())
  ) {
    age -= 1;
  }

  return age;
};
