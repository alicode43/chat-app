function Invite() {
  return (
    <div className="invite">
      <input
        className="search-people"
        type="text"
        placeholder="Invite People"
      />
      <svg
      className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
      >
        <path
          d="M9.0155 8.8085L11.157 10.9495L10.4495 11.657L8.3085 9.5155C7.51187 10.1541 6.521 10.5015 5.5 10.5C3.016 10.5 1 8.484 1 6C1 3.516 3.016 1.5 5.5 1.5C7.984 1.5 10 3.516 10 6C10.0015 7.021 9.65411 8.01187 9.0155 8.8085ZM8.0125 8.4375C8.64706 7.78494 9.00143 6.91021 9 6C9 4.066 7.4335 2.5 5.5 2.5C3.566 2.5 2 4.066 2 6C2 7.9335 3.566 9.5 5.5 9.5C6.41021 9.50143 7.28494 9.14706 7.9375 8.5125L8.0125 8.4375Z"
          fill="#B1AEC5"
        />
      </svg>
      <div className="contact-card">
        <input className="invite-checkbox" type="checkbox" />
        <div className="contact-profile"></div>
        <div className="contact-profile-details">
          <h1>Karthic</h1>
          <p>9876543210</p>
        </div>
      </div>
    </div>
  );
}
export default Invite;
