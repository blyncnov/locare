import React from "react";

// React Icon
import { FaTimes } from "react-icons/fa";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { EDIT_EVENT } from "../../redux/actions/action";

// Modal Style
import style from "./modal.module.scss";

// Icon Style
const Icon_style = {
  fontSize: "2em",
  cursor: "pointer",
  color: "red",
  padding: ".05em",
  borderRadius: "50%",
  border: "1px solid red",
};

const Modal = ({ Edited_Event }: any) => {
  const dispatch = useDispatch();

  // My Events From Redux State
  const Revel_Events = useSelector((state: any) => state.EventReducer.events);

  // Close Modal Handler
  const CloseModalhandler = () => {
    dispatch({ type: EDIT_EVENT });
  };

  const onCreateNewEventHandler = (e: any) => {
    e.preventDefault();

    // Get Values from Inputs
    const Event_Name = e.target.event_name.value.trim();
    const Event_Target = e.target.target_number.value.trim();
    const Event_Description = e.target.event_description.value.trim();
    const Event_Start = e.target.event_start_date.value.trim();
    const Event_End = e.target.event_end_date.value.trim();

    if (!Event_Name || !Event_Target || !Event_Description) {
      return;
    }

    let myIndex = Revel_Events.findIndex(
      (obj: any) => obj.id == Edited_Event.id
    );

    Revel_Events[myIndex].event_name = Event_Name;
    Revel_Events[myIndex].event_description = Event_Name;
    Revel_Events[myIndex].total_invites = Event_Target;
    Revel_Events[myIndex].event_start = Event_Start;
    Revel_Events[myIndex].event_end = Event_End;

    // Dispatch Object
    dispatch({ type: EDIT_EVENT });
  };

  return (
    <div className={style.modal}>
      <div className={style.modal_container}>
        <div className={style.modal_top_row}>
          <h2>Create A New Event</h2>
          <FaTimes style={Icon_style} onClick={CloseModalhandler} />
        </div>

        <form className={style.auth_form} onSubmit={onCreateNewEventHandler}>
          <div className={style.group_field}>
            <label htmlFor="event_name">Event Name</label>
            <input
              type="text"
              name="event_name"
              id="event_name"
              defaultValue={Edited_Event.event_name}
              onChange={(e) => e.target.value}
            />
          </div>

          <div className={style.group_field}>
            <label htmlFor="event_name">Start Date</label>
            <input
              type="date"
              name="event_start_date"
              id="event_start_date"
              defaultValue={Edited_Event.event_start}
              onChange={(e) => e.target.value}
            />
          </div>

          <div className={style.group_field}>
            <label htmlFor="event_name">End Date</label>
            <input
              type="date"
              name="event_end_date"
              id="event_end_date"
              defaultValue={Edited_Event.event_end}
              onChange={(e) => e.target.value}
            />
          </div>

          <div className={style.group_field}>
            <label htmlFor="password">Target Attendees</label>
            <input
              type="number"
              name="target_number"
              defaultValue={Edited_Event.total_invites}
              onChange={(e) => e.target.value}
            />
          </div>

          <div className={style.group_field}>
            <label htmlFor="password">Event Description</label>
            <textarea
              name="event_description"
              defaultValue={Edited_Event.event_description}
              onChange={(e) => e.target.value}
            ></textarea>
          </div>

          <div className={style.group_field}>
            <button>Update Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
