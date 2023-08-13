import React, {useState} from "react";

const options = ['Orman Meyveli', 'Patatesli', 'Tuzlu', 'Şekerli', 'İstemiyorum'];

export default function PersonelPizza(){


    const [selected, setSelected] = useState([]);

    const toggleTopping = ( {target} ) => {

        const clicekTopping = target.value;

        setSelected((prev) => {
            if(prev.includes(clicekTopping)){
                return prev.filter(t => t !== clicekTopping)
            }else{
                return [clicekTopping, ...prev]
            }
        })
    }

    return(
        <div>
            {options.map(option => (
                <button value={option} onClick={toggleTopping} key={option}>
                    {selected.includes(option) ? 'Remove' : 'Add'}
                </button>
            ))}
            <p>
                Order a {selected.join(', ')} pizza
            </p>
        </div>
    )
}