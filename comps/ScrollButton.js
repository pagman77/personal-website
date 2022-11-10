import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollButton({ scrollTop }) {
  return (
    <div className="btn-container">
      <btn className="btn scroll-btn" onClick={scrollTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </btn>
    </div>
  );
}