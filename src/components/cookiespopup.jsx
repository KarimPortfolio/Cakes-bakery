import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-regular-svg-icons'


export default function Cookiespopup() {

    const handlePopup = () => {
        var cookiesPopup = document.querySelector('.cookies_popup');
        var cookiePopupOpen = document.querySelector('.cookie_open');
        var cookie_icon = document.querySelector('.cookie_icon2');
        var cookie_popup_text = document.querySelector('.cookie_popup_text2');
        var closeBtn2_hide = document.querySelector('.closeBtn2_hide');
        setTimeout( () => {
            cookiePopupOpen.style.display = 'none';
            cookiesPopup.style.width = '500px';
            cookiesPopup.style.height = 'fit-content';
            cookiesPopup.style.padding = '10px 10px 30px 10px';
            cookiesPopup.style.borderRadius = '10px';
            cookiesPopup.style.position = 'fixed';
            cookiesPopup.style.top = '50%';
        },20)
        setTimeout( () => {
            // cookie_icon.style.display = 'block';
            // cookie_popup_text.style.display = 'block';
            cookie_icon.removeAttribute('cookie_icon2');
            cookie_icon.setAttribute('class','cookie_icon');
            cookie_popup_text.removeAttribute('cookie_popup_text2');
            cookie_popup_text.setAttribute('class','cookie_popup_text');
            closeBtn2_hide.removeAttribute('closeBtn2_hide');
            closeBtn2_hide.setAttribute('class','closeBtn2');
        },200)
    }

    const handleClosePopup = () => {
        var cookiesPopup = document.querySelector('.cookies_popup');
        var cookiePopupOpen = document.querySelector('.cookie_open');
        var cookie_icon2 = document.querySelector('.cookie_icon');
        var cookie_popup_text2 = document.querySelector('.cookie_popup_text');
        var closeBtn2_hide = document.querySelector('.closeBtn2');
        setTimeout( () => {
            cookiePopupOpen.style.display = 'block';
            cookiesPopup.style.width = '60px';
            cookiesPopup.style.height = '60px';
            cookiesPopup.style.padding = '0px';
            cookiesPopup.style.borderRadius = '50%';
            cookiesPopup.style.top = '85%';
        },100)
        setTimeout( () => {
            cookie_icon2.removeAttribute('cookie_icon');
            cookie_icon2.setAttribute('class','cookie_icon2');
            cookie_popup_text2.removeAttribute('cookie_popup_text');
            cookie_popup_text2.setAttribute('class','cookie_popup_text2');
            closeBtn2_hide.removeAttribute('closeBtn2');
            closeBtn2_hide.setAttribute('class','closeBtn2_hide');
        },20)
    }



  return (
  
    <div className='cookies_popup ms-5' onClick={handlePopup} >
        <div className='cookie_open'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 512 512">
                <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM208 208c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/>
            </svg>
        </div>
        <div className="closeBtn2_hide" onClick={handleClosePopup}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
        <div className="cookie_icon2 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 512 512">
                <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8zM208 208c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm160 0c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"/>
            </svg>
        </div>
        <div className="cookie_popup_text2 mt-3">
            <h4 className='mb-4 mt-3'>Heya! This website uses cookies</h4>
            <p className='mb-5'>We use  cookies to personalize your experience.By continuing to visit this 
                website your agree to our use of cookies.<a href="">Learn more</a>
            </p>
            <button className='btn btn-primary'>Accept</button>
        </div>
    </div>
  
    
  )
}
