"use client";

import { Range } from "react-date-range";
import Calender from "../inputs/Calender";
import Button from "../Button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disable?: boolean;
  disableDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disableDates,
  disable,
}) => {
  return (
    <>
      <div
        className="bg-white rounded-xl border-[1px] border-neutral-200
      overflow-hidden"
      >
        <div className="flex flex-row items-center gap-1 p-4">
          <div className=" text-2xl font-semibold">${price}</div>
          <div className="font-liught text-neutral-600"> night</div>
        </div>
      </div>
      <hr />
      <Calender
        value={dateRange}
        disableDates={disableDates}
        onChange={(value) => {
          onChangeDate(value.selection);
        }}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disable} label="Reserve" onClick={onSubmit} />
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </>
  );
};

export default ListingReservation;
