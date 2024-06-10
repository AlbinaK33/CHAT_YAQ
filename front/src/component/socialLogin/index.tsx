import React from 'react';
import "./social.scss";

function SocialLogin() {
    return (
        <div className="social-login">
        <button className="button button--google" type="submit">
          <img id="img--google" src="/svg/google.svg" alt="google" />
          Увійти через Google</button>
        <button className="button button--apple" type="submit"><img src="/svg/apple.svg" alt="apple" /></button>
        <button className="button button--facebook" type="submit"><img src="/svg/facebook.svg" alt="facebook" /></button>
        </div>
    )
}

export default SocialLogin;
