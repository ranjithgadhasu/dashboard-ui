import { friends } from "./myProfileData";
import "./FriendsList.css";

const FriendsList = () => {
  return (
    <div className="friends-list-card">

      {/* HEADER */}

      <div className="friends-list-header">

        <div>
          <h2 className="friends-list-title">
            Friends
          </h2>

          <p className="friends-list-count">
            {friends.length} friends
          </p>
        </div>

      </div>


      {/* ALL FRIENDS */}

      <div className="friends-list-items">

        {friends.map((friend) => (

          <div
            key={friend.id}
            className="friend-item"
          >

            {/* Avatar */}

            <div className="friend-avatar-wrapper">

              <img
                src={friend.image}
                alt={friend.name}
                className="friend-avatar"
              />

              {/* Online */}

              {friend.online && (
                <span className="friend-online" />
              )}

            </div>


            {/* Friend Details */}

            <div className="friend-details">

              <p className="friend-name">
                {friend.name}
              </p>

              <p className="friend-role">
                {friend.role}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default FriendsList;