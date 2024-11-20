import { BottomColumns } from "../BottomColumns/BottomColumns";
import { PointsCircle } from "../PointsCircle/PointsCircle";
import { TimeCircle } from "../TimeCircle/TimeCircle";
import { TitleHistoricalDates } from "../TitleHistoricalDates/TitleHistoricalDates";
import { TopColumns } from "../TopColumns/TopColumns";
import "./styles.scss";

export const HistoricalDates = () => {
  return (
    <div className="container">
      <TitleHistoricalDates />
      <PointsCircle />
      <TimeCircle />
      <TopColumns />
      <BottomColumns />
    </div>
  );
};
