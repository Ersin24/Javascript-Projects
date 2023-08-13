import React, {useState} from 'react';

const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber(){

    const [phone, setPhone] = useState('');

    const handleChange = ({ target }) => {
        const newPhone = target.value;
        const isValid = validPhoneNumber.test(newPhone);

        if(isValid){
            setPhone(newPhone)
        }
    }


    return(
        <div className='phone'>
            <label htmlFor='phone-input'>Phone</label>
            <input id='phone-input' value={phone} onChange={handleChange} />
        </div>
    )
}