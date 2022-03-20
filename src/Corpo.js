
export default function Corpo(){
    function iniciar(){
    
        const tela1 = document.querySelector('.tela1')
        tela1.classList.add('esconderTela')
        const tela2 = document.querySelector('.tela2')
        tela2.classList.remove('esconderTela')
    }
    
    return (
    <div className='corpo'>
        <div className='tela1 '>
            <img className='logo' src='logo.png'/>
            <h1 className='zap'>ZapRecall</h1>


            <button onClick={iniciar} className='button' > Inciar Recall!</button>
        </div>
        
    </div>
    )
}
