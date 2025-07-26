export default function ChainMessages({name, image, messages}) {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src={image} alt={name} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
                <p style={{ fontWeight: 'bold', fontSize: 'large' }}>{name}</p>
            </div>
            <div style={{marginLeft: '60px'}}>
                {messages.map(msg => <p style={{margin: '5px 0'}}>{msg}</p>)}
            </div>
        </div>
    );
}