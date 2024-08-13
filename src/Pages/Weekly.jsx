import Paper from "@mui/material/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
  AllDayPanel,
  ConfirmationDialog,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  EditingState,
  IntegratedEditing,
  ViewState,
} from "@devexpress/dx-react-scheduler";
import useFetchEvents from "../Hooks/useFetchEvents";
import { handleCommitChanges } from "../Features/scheduleHandlers";
import FormTranslation from "../ui/FormTranslation";
import Spinner from "../ui/Spinner";
import useTranslateObserver from "../Hooks/useTranslateObserver";

function Weekly() {
  const { data, loading, setData } = useFetchEvents();
  const locale = "pl-PL";
  const messages = {
    allDay: "Dzisiaj",
    today: "Aktualny",
  };
  useTranslateObserver();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Paper>
          <Scheduler data={data} height={800} locale={locale}>
            <ViewState />
            <EditingState
              onCommitChanges={handleCommitChanges(data, setData)}
            />
            <WeekView startDayHour={8} endDayHour={19} />
            <IntegratedEditing />
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

export default Weekly;
