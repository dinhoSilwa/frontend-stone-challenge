
export const cleanNonNumeric = (value: string): number => {
  const toCoinValue = value.replace(/\D/g, "");
  return (Number(toCoinValue) / 100)

}

export const numberToMoneyString = (value:number): string =>{
  const newString = value.toLocaleString('es-Us',{style:"currency",currency : "USD"})
  return newString
}


