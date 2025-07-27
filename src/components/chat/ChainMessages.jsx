import translate from "../../backend-interactions/translate";
import { useState } from "react";

export default function ChainMessages({name, image, messages}) {
    messages = messages.join("\n").split("\n").filter(msg => msg.trim() !== "");
    const [translationStatus, setTranslationStatus] = useState(0);
    const handleTranslateBtnClick = async () => {
        if ([0, 2].includes(translationStatus)) {
            setTranslationStatus(1)
            translate(messages.join("\n"))
            .then(resp => {
                setTranslationStatus(resp);
            })
            .catch(() => {
                setTranslationStatus(2)
            })
        }
        else if (!([0, 1, 2].includes(translationStatus))) {
            setTranslationStatus(0)
        }
    }
    // 0: initial
    // 1: in progress
    // 2: error
    // in case of str, then successful translation (the str is the translated text)
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={image} alt={name[0]} style={{width: '50px', height: '50px', borderRadius: '50%', justifyContent: 'center', display: 'flex', alignItems: 'center', border: 'white 1px solid'}} />
                <p style={{ fontWeight: 'bold', fontSize: 'large' }}>{name}</p>
                <button onClick={handleTranslateBtnClick} style={{ backgroundColor: 'black', color: 'gray', border: 'none', padding: '5px 10px', cursor: 'pointer', fontSize: '12px' }}>
                    {translationStatus === 0 ? "Translate" :
                     translationStatus === 1 ? "..." :
                     translationStatus === 2 ? "Failed" :
                     "Show original msg"
                    }
                </button>
            </div>
            <div style={{marginLeft: '60px'}}>
                {[0, 1, 2].includes(translationStatus) ? messages.map((msg, index) => <p key={index} style={{margin: '5px 0'}}>{msg}</p>) :
                 translationStatus.split("\\n").map((msg, index) => <p key={index} style={{margin: '5px 0'}}>{msg}</p>)
                }
            </div>
        </div>
    );
}