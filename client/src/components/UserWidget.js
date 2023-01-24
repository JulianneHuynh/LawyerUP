import AccountSide from "./AccountSide";
import MessagesSide from "./MessagesSide";

function UserWidget() {
    return (
        <div id="user-widget">
            <AccountSide />
            <MessagesSide />
        </div>
    );
};

export default UserWidget;