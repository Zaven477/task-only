import { BottomColumns } from "../BottomColumns/BottomColumns";
import { TopColumns } from "../TopColumns/TopColumns";
import "./styles.scss";

export const HistoricalDates = () => {
  return (
    <div className="container">
      <TopColumns />
      <BottomColumns />
    </div>
  );
};
