import React from "react";

// React Icon
import { FaTimes } from "react-icons/fa";

// Redux
import { useDispatch } from "react-redux";
import { SHOW_MODAL, CREATE_NEW_EVENT } from "../../redux/actions/action";

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

const Modal = ({ Revel_Events }: any) => {
  const dispatch = useDispatch();

  console.log(Revel_Events);

  // Close Modal Handler
  const CloseModalhandler = () => {
    dispatch({ type: SHOW_MODAL });
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

    // Store values into Object
    let event_data = {
      id: Revel_Events.length + 1,
      event_name: Event_Name,
      event_description: Event_Description,
      total_invites: Event_Target,
      event_url: "http://revel.com/84hcdh4",
      event_start: Event_Start,
      event_end: Event_End,
    };

    // Dispatch Object
    dispatch({ type: CREATE_NEW_EVENT, payload: event_data });

    // Reset Value to Empty
    e.target.event_name.value = "";
    e.target.target_number.value = "";
    e.target.event_description.value = "";
    e.target.event_start_date.value = "";
    e.target.event_end_date.value = "";

    // Close Modal
    dispatch({ type: SHOW_MODAL });
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
              onChange={(e) => e.target.value}
            />
          </div>

          <div className={style.group_field}>
            <label htmlFor="event_name">Start Date</label>
            <input
              type="date"
              name="event_start_date"
              id="event_start_date"
              onChange={(e) => e.target.value}
            />
          </div>

          <div className={style.group_field}>
            <label htmlFor="event_name">End Date</label>
            <input
              type="date"
              name="event_end_date"
              id="event_end_date"
              onChange={(e) => e.target.value}
            />
          </div>

          <div className={style.group_field}>
            <label htmlFor="password">Target Attendees</label>
            <input
              type="number"
              name="target_number"
              onChange={(e) => e.target.value}
            />
          </div>

          <div className={style.group_field}>
            <label htmlFor="password">Event Description</label>
            <textarea
              name="event_description"
              onChange={(e) => e.target.value}
            ></textarea>
          </div>

          <div className={style.group_field}>
            <button>Create Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
