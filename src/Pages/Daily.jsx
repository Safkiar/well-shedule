import Paper from "@mui/material/Paper";
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  DateNavigator,
  TodayButton,
  ConfirmationDialog,
  AllDayPanel,
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import FormTranslation from "../ui/FormTranslation";
import { handleCommitChanges } from "../Features/scheduleHandlers";
import useFetchEvents from "../Hooks/useFetchEvents";
import Spinner from "../ui/Spinner";
import useTranslateObserver from "../Hooks/useTranslateObserver";

function Daily() {
  const { data, loading, setData } = useFetchEvents();
  const locale = "pl-PL";
  const messages = {
    today: "Aktualny",
    allDay: "Dzisiaj",
  };
  useTranslateObserver();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Paper>
          <Scheduler data={data} locale={locale}>
            <ViewState />
            <EditingState
              onCommitChanges={handleCommitChanges(data, setData)}
            />
            <IntegratedEditing />
            <DayView startDayHour={8} endDayHour={18} />
            <AllDayPanel messages={messages} />
            <Toolbar />
            <DateNavigator />
            <TodayButton messages={messages} />
            <ConfirmationDialog />
            <Appointments />
            <AppointmentTooltip showOpenButton showDeleteButton />
            <FormTranslation />
          </Scheduler>
        </Paper>
      )}
    </>
  );
}

export default Daily;
