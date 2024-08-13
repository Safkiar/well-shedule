import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { pl } from "date-fns/locale";
import ChangeText from "./TranslationsLayout/ChangeText";

const customMessages = {
  detailsLabel: "Szczegóły",
  titleLabel: "Tytuł",
  allDayLabel: "Cały dzień",
  repeatLabel: "Powtórz",
  repeatEveryLabel: "Powtarzaj co",
  endRepeatLabel: "Koniec powtarzania",
  onLabel: "Na",
  afterLabel: "Po",
  occurrenceLabel: "wystąpienia",
  neverLabel: "Nigdy",
  dailyLabel: "Codziennie",
  weeklyLabel: "Co tydzień",
  monthlyLabel: "Co miesiąc",
  yearlyLabel: "Co rok",
  moreInformationLabel: "Więcej informacji",
};

function CustomAppointmentForm() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
      <AppointmentForm messages={customMessages} />
      <ChangeText />
    </LocalizationProvider>
  );
}

export default CustomAppointmentForm;
