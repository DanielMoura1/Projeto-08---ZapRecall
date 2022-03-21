import { useState } from "react";
import Caixas from "./Caixas";

export default function Tela2(){
    function comparador() { 
        return Math.random() - 0.5; 
    }
    
    const [puts,setPuts]  =useState(0)
    const numero = 8
    const [sumir,setSumir] =useState(['barra'])
    const [aparecer,setAparecer] =useState([' esconderTela']) 
    const [aparecer2,setAparecer2] =useState([' esconderTela'])
    const carta =[{baralho:'o que é jsx1',reposta:'Uma extensão de linguagem do JavaScript'},{baralho:'O React é __',reposta:'uma biblioteca JavaScript para construção de interfaces'}
    ,{baralho:'Componentes devem iniciar com __',reposta:' letra maiúscula'},{baralho:'Podemos colocar __ dentro do JSX',reposta:' expressões'}
    ,{baralho:' O ReactDOM nos ajuda __ ',reposta:'interagindo com a DOM para colocar componentes React na mesma'},
    {baralho:'Usamos o npm para',reposta:'gerenciar os pacotes necessários e suas dependências'}
    ,{baralho:'Usamos props para __',reposta:'passar diferentes informações para componentes '},{baralho:'Usamos estado (state) para __',reposta:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},] 
    carta.sort(comparador);
    const [fig ,setFig] = useState(["fig1 esconderTela","fig2 esconderTela","fig3 esconderTela","fig4 esconderTela","fig4 esconderTela","fig4 esconderTela","fig4 esconderTela","fig4 esconderTela"])
    function abrir(i){
        fig[i] ='fig1'
        setFig([...fig])

    }
    let i=0
    function abc(){
        
        console.log(puts)
        if (valor  === numero -1){
            if(puts >0){
                sumir[0] = 'esconderTela'
                setSumir([...sumir])
                aparecer2[0]='barra2'
                setAparecer2([... aparecer2])
            }else{
           
            sumir[0] = 'esconderTela'
            setSumir([...sumir])
            aparecer[0]='barra2'
            setAparecer([... aparecer])
            }
        }   

    }
    function nao(){
        setPuts(puts+1)
    }
    const [valor,setValor] =useState(0);
    function callback(){
        console.log('oi '+puts)
        setValor(valor + 1)
        
       
       
    }
    const [figura,setFigura] =useState(['','','','']);
    function Figura(imagem,i){
        console.log('puts '+puts)
        
        figura[i] = imagem
        setFigura([...figura])
        console.log(puts)
        if (valor  === numero -1){
            if(puts >0 || imagem == 'xxx.png'){
                sumir[0] = 'esconderTela'
                setSumir([...sumir])
                aparecer2[0]='barra2'
                setAparecer2([... aparecer2])
            }else{
           
            sumir[0] = 'esconderTela'
            setSumir([...sumir])
            aparecer[0]='barra2'
            setAparecer([... aparecer])
            }
        }     

        
        
        

    }
      
    let dan='dan'
    return(
        <>
        <div className="tela2 esconderTela">
            <div className='logoPequeno'>
                <img src='logo-pequeno.png'/>
                <h1>ZapRecall</h1>
            </div>
            
             {carta.map((cartas) => {
                 i =i+1
             return (<Caixas i={i-1}  puts={puts} nao={nao} pergunta ={`pergunta ${i}`} abrir={abrir} fig={fig[i-1]} texto={cartas.baralho} reposta={cartas.reposta}  soma={callback}  imagem ={Figura} figura={figura[i-1]}/>
             )
        })}
         

            <div className={sumir[0]} key={valor.dan}>
                {valor}/{numero} CONCLUÍDOS
                <div>
                <img className={fig[0]} src ={figura[0]} />
                <img className={fig[1]} src ={figura[1]} />
                <img className={fig[2]} src ={figura[2]} />
                <img className={fig[3]} src ={figura[3]} />
                <img className={fig[4]} src ={figura[4]} />
                <img className={fig[5]} src ={figura[5]} />
                <img className={fig[6]} src ={figura[6]} />
                <img className={fig[7]} src ={figura[7]} />
                </div>
            </div>
            <div className={aparecer[0]}>
                <div className='fim'><img className="mb" src='parabens.png'/> <h2>PARABÉNS!</h2></div>
                <p className="letra"> Você não esqueceu de nenhum flashcard!</p>
                <div>
                <img className={fig[0]} src ={figura[0]} />
                <img className={fig[1]} src ={figura[1]} />
                <img className={fig[2]} src ={figura[2]} />
                <img className={fig[3]} src ={figura[3]} />
                <img className={fig[4]} src ={figura[4]} />
                <img className={fig[5]} src ={figura[5]} />
                <img className={fig[6]} src ={figura[6]} />
                <img className={fig[7]} src ={figura[7]} />
                </div>
                

            </div>
            <div className={aparecer2[0]}>
                <div className='fim'><img className="mb" src='sad.png'/> <h2> PUTZ!</h2> </div>
                <p className="letra"> Ainda faltaram alguns... Mas não desanime!</p>
                <div>
                <img className={fig[0]} src ={figura[0]} />
                <img className={fig[1]} src ={figura[1]} />
                <img className={fig[2]} src ={figura[2]} />
                <img className={fig[3]} src ={figura[3]} />
                <img className={fig[4]} src ={figura[4]} />
                <img className={fig[5]} src ={figura[5]} />
                <img className={fig[6]} src ={figura[6]} />
                <img className={fig[7]} src ={figura[7]} />
                </div>

            </div>
            
            
        </div>
        
        

        </>
    )
}
