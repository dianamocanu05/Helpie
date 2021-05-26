import React from 'react';
import "./style.css";
// const formik = useFormik({
//     initialValues: {
//         tip_nevoie: 'Produs',
//         tags: [],
//         textbox: '',
//         quantity: 0,
//         bifatIzolare: false,
//     },
//     onSubmit: values => {
//         values.tags = props.tags.map((tag) => [tag.id, tag.cantitate] );
//         alert(JSON.stringify(values, null, null));
//         fetch(`https://hooks.zapier.com/hooks/catch/10117216/byp97u8`, {
//             method: 'POST',
//             body: JSON.stringify(values, null, null),
//         });
//         console.log(values);
//     }
// });
function CantitateInput(props) {
    const {quantity,giveQuantity,tag,keys} = props;

    let cantitateArray = quantity;
    /**
 * let currentValue=0;
 * const onChangeInput = ()=>{
 * if(event.targer.value>=0&&event.target.value<=9)
 *  {
 *        currentValue=currentValue+event.target.value*10;
 *  }
 * else 
 *  {
 *      currentValue=currenValue/10;
 *  }
 * cantitate[indexInput]=currentValue
 * }
 */
    const seteazaCantitate = (event) => {
        giveQuantity((cantitate) => 
        {
            if(cantitateArray.length>=keys)
                {cantitateArray[keys-1] = event.target.value;
                cantitate=[...cantitateArray]}
            else
                if(event.target.value)
                    {cantitateArray=[...cantitateArray, event.target.value];
                cantitate=[...cantitateArray]}
            return cantitate;
        }
        );
    };

    

    return (
        <div className="Cantitate_produs" id="cantitateprodus">
            <div className="Cantitate_produs_1">
                <label htmlFor="quantity">Cantitatea produsului {tag.id}:</label>
                <br />
                <input onChange={seteazaCantitate} required type="number" id="quantity" name="quantity" min="1" max="100" />
            </div>
        </div>

    );
}

export default CantitateInput;