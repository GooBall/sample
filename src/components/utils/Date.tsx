import * as React from 'react';
import moment from 'moment';
import Placeholder from './Placeholder';


export interface DateProps {
  date: string;
}

const Date = ({date}: DateProps) => {
  const momentDate = moment(date);
  const time = momentDate.format("hh:mma");
  const dateFrom = momentDate.from(moment());
  const displayDate = date && dateFrom !== "Invalid date" ? dateFrom : undefined;
  return (
    displayDate
      ? <div>{displayDate} at {time}</div>
      : <Placeholder />
  );
}

export default Date;
