import AccountSide from "./AccountSide";
import MessagesSide from "./MessagesSide";

function UserWidget({
    user,
    setUser
}) {
    if (user) {
        return (
            <div id="user-widget">
                <AccountSide 
                    user={user}
                />
                <MessagesSide />
            </div>
        );
    } else {
        return (
            <div id="user-widget">
                <AccountSide 
                    user={user}
                    setUser={setUser}
                />
            </div>
        )
    };
};

export default UserWidget;