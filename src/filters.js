import { formatDistance, isSameWeek, format } from "date-fns";

const FORMAT_DATE = "dd/MM/yyyy";

export const timeAgo = (date) => {
  if (date) {
    const distance = formatDistance(new Date(date), new Date(), {
      addSuffix: true,
    });
    return isSameWeek(new Date(date), new Date())
      ? distance
      : format(new Date(date), FORMAT_DATE);
  }
  return null;
};
