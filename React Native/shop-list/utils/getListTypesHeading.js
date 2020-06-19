export function getListTypesHeading(type) {
  const titles = {
      [LISTS_TYPES.ONETIME]: 'One Time Lists',
      [LISTS_TYPES.REGULAR]: 'Regular Lists'
  };
  return titles[type] || LISTS_TYPES.ONETIME;
}