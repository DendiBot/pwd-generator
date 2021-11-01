import * as randomstring from 'randomstring';
import { useEffect, useState } from 'react';

const PasswordGenerator = ({ length, charSet, buttonClicked }) => {

    return (
        <div>
            Here's your password
            <div>
                {buttonClicked ? <div>{randomstring.generate({
                    length: length,
                    charset: charSet
                })}</div> : <div></div>}
            </div>
        </div>
    )
}

export default PasswordGenerator;