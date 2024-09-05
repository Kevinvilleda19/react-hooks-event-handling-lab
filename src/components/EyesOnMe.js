// Code EyesOnMe Component Here
import React from "react";


function EyesOnMe () {

   function handlefocus() {
    console.log('Good!');
   }
   function handleblur() {
    console.log('Hey! Eyes on me!');
   }

    return (
        <div>
            <button
            onFocus={handlefocus}
            onBlur={handleblur}
            >
                Eyes on me
            </button>
        </div>
    );
}

export default EyesOnMe;