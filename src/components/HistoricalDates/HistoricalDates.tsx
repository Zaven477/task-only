import { Dates } from "../Dates/Dates";
import { HorizontalBorder } from "../HorizontalBorder/HorizontalBorder";
import { TimeCircle } from "../TimeCircle/TimeCircle";
import { TitleHistoricalDates } from "../TitleHistoricalDates/TitleHistoricalDates";
import { VerticalBorder } from "../VerticalBorder/VerticalBorder";
import "./styles.scss";

export const HistoricalDates = () => {
  return (
    <div className="container">
      <HorizontalBorder />
      <VerticalBorder />
      <TimeCircle />
      <TitleHistoricalDates />
      <Dates />
    </div>
  );
};
