// import React from 'react';

function CommunityChat() {
  return (
    <div>
      <div className="community-group">
        <div className="community-details">
          <div className="commuity-to-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="contact-card ">
            <div className="contact-profile"></div>
            <div className="contact-profile-details">
              <h1>Ali</h1>
              <p>Online</p>
            </div>
          </div>
        </div>

        <div className="video-ai">
          <div className="video-call-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.07132 3.40771C9.59905 3.40771 10.1052 3.61735 10.4783 3.99051C10.8515 4.36367 11.0611 4.86978 11.0611 5.39751V5.50343L13.4268 4.08425C13.4965 4.04242 13.576 4.01984 13.6573 4.0188C13.7385 4.01776 13.8186 4.0383 13.8893 4.07833C13.9601 4.11836 14.0189 4.17644 14.0598 4.24665C14.1008 4.31685 14.1223 4.39666 14.1223 4.47792V11.52C14.1223 11.6012 14.1008 11.681 14.0598 11.7512C14.0189 11.8214 13.9601 11.8795 13.8893 11.9195C13.8186 11.9596 13.7385 11.9801 13.6573 11.9791C13.576 11.978 13.4965 11.9555 13.4268 11.9136L11.0611 10.4945V10.6016C11.0611 11.1293 10.8515 11.6354 10.4783 12.0086C10.1052 12.3818 9.59905 12.5914 9.07132 12.5914H3.86724C3.33951 12.5914 2.8334 12.3818 2.46024 12.0086C2.08708 11.6354 1.87744 11.1293 1.87744 10.6016V5.39751C1.87744 4.86978 2.08708 4.36367 2.46024 3.99051C2.8334 3.61735 3.33951 3.40771 3.86724 3.40771H9.07132ZM9.07132 4.32608H3.86724C3.58308 4.32608 3.31055 4.43896 3.10962 4.6399C2.90869 4.84083 2.79581 5.11335 2.79581 5.39751V10.6016C2.79581 11.193 3.27581 11.673 3.86724 11.673H9.07132C9.35548 11.673 9.628 11.5601 9.82893 11.3592C10.0299 11.1583 10.1427 10.8858 10.1427 10.6016V5.39751C10.1427 5.11335 10.0299 4.84083 9.82893 4.6399C9.628 4.43896 9.35548 4.32608 9.07132 4.32608ZM13.204 5.28914L11.0611 6.57547V9.42302L13.204 10.7087V5.28914Z"
                fill="#7201FF"
              />
            </svg>
          </div>
          <div className="ai-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <g clipPath="url(#clip0_2575_8738)">
                <path
                  d="M11.5055 3.8497C12.6636 3.8497 13.6023 2.91094 13.6023 1.75293H14.5701C14.5701 2.91094 15.5088 3.8497 16.6668 3.8497V4.81745C15.5088 4.81745 14.5701 5.75621 14.5701 6.91422H13.6023C13.6023 5.75621 12.6636 4.81745 11.5055 4.81745V3.8497ZM0.322754 9.49486C3.17326 9.49486 5.48404 7.18408 5.48404 4.33357H7.20447C7.20447 7.18408 9.51527 9.49486 12.3658 9.49486V11.2153C9.51527 11.2153 7.20447 13.5261 7.20447 16.3766H5.48404C5.48404 13.5261 3.17326 11.2153 0.322754 11.2153V9.49486ZM14.3012 12.0755C14.3012 13.6195 13.0496 14.8712 11.5055 14.8712V16.1615C13.0496 16.1615 14.3012 17.4132 14.3012 18.9572H15.5916C15.5916 17.4132 16.8433 16.1615 18.3873 16.1615V14.8712C16.8433 14.8712 15.5916 13.6195 15.5916 12.0755H14.3012Z"
                  fill="#7201FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_2575_8738">
                  <rect
                    width="20.6452"
                    height="20.6452"
                    fill="white"
                    transform="translate(0.322754 0.0322266)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <hr />
      <div className="new-session">
        <button className="new-session-button">+ New Session</button>
      </div>

      <div className="chats">
        <div className="sender">
         <div className="sender-profile-image"></div>
         <div className="sender-chat-message">
            <p> Name</p>
            <h1> Sam, are you ready? 🤣😂</h1>
         </div>
        </div>
        <div className="receiver">
          <p> I am fine how are you </p>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" className="chat-input-text" placeholder="Type a message" />
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
  <circle cx="13.5" cy="14" r="13.5" fill="#233C4C"/>
</svg>
      </div>
    </div>
  );
}

export default CommunityChat;
