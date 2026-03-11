import React, { useEffect } from 'react';

const FacebookChat = () => {
    useEffect(() => {
        // Setup chatbox div
        var chatbox = document.getElementById('fb-customer-chat');
        if (chatbox) {
            chatbox.setAttribute("page_id", "100069416836777");
            chatbox.setAttribute("attribution", "biz_inbox");
            chatbox.setAttribute("theme_color", "#10B981");
        }

        // Initialize Facebook SDK
        window.fbAsyncInit = function () {
            window.FB.init({
                xfbml: true,
                version: 'v18.0'
            });

            // HIDE the default bubble immediately after init
            // to let the custom ContactMenu control it.
            window.FB.Event.subscribe('customerchat.load', () => {
                console.log("FacebookChat: Loaded, hiding default bubble");
                window.FB.CustomerChat.hide();
            });
        };

        // Load SDK
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    return (
        <>
            <div id="fb-root"></div>
            <div id="fb-customer-chat" className="fb-customerchat"></div>
        </>
    );
};

export default FacebookChat;
