const getAge = ( birthday: string ): number => {
  const today = new Date();
  const birthDate = new Date( birthday );
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if ( month < 0 || 
      ( month === 0 && today.getDate() < birthDate.getDate() ) ) age--;
  
  return age;
}

export {
  getAge,
};