import Paper from "@mui/material/Paper";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
  ConfirmationDialog,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  EditingState,
  IntegratedEditing,
  ViewState,
} from "@devexpress/dx-react-scheduler";
import { handleCommitChanges } from "../Features/scheduleHandlers";
import useFetchEvents from "../Hooks/useFetchEvents";
import FormTranslation from "../ui/FormTranslation";
import Spinner from "../ui/Spinner";
import useTranslateObserver from "../Hooks/useTranslateObserver";

function Monthly() {
  const { data, loading, setData } = useFetchEvents();
  const locale = "pl-PL";
  const messages = {
    today: "Aktualny",
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
            <MonthView />
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

export default Monthly;
