import React, { useState } from "react";

export default function Caixas(props)  {
    const [ok,setOk] =  useState([0])
    const [cas, setCas] = useState(['caixa','caixa2 esconderTela'])
    const [cla,setCla] = useState(['caixa3 esconderTela'])
   
    const {fig,abrir} =props
    const [immg,setImmg] =useState(['imgg'])
    function immgg(){
        immg[0] ='imgg esconderTela'
        setImmg([...immg])
        
    }
    function Caixa(){
        if(ok[0] ===0){

            ok[0] = 1
            cas[0]= 'caixa esconderTela'
            cas[1]= 'caixa2'
            setCas([...cas])
            setOk([...ok])
        }
    }
    function Opcao(){
        cas[1]='caixa2 esconderTela'
        cla[0]='caixa3'
        setCas([...cas])
        setCla([...cla])
    }
    function FinalVer(){
        cla[0]='caixa3 esconderTela'
        cas[0]='caixaVer'
        setCas([...cas])
        setCla([...cla])
        
        props.nao()
        return (props.imagem('xxx.png',props.i) )
    }
    function FinalAma(){
        cla[0]='caixa3 esconderTela'
        cas[0]='caixaAma'
        setCas([...cas])
        setCla([...cla])
        
        return (props.imagem('amarelo.png',props.i))
    }
    function FinalVerd(){
        cla[0]='caixa3 esconderTela'
        cas[0]='caixaVerd'
        setCas([...cas])
        setCla([...cla])
        
        return (props.imagem('verde.png',props.i))

    }
    
    return(
        < >
       
            <div key={cas.b} onClick={(b)=> {
                        Caixa()
                         }} className={cas[0]}>
                <div key={immg.b} className='seta'>
                    <h1  className='textoCaixa' >{props.pergunta}</h1>
                    <img  className={immg[0]}  src='Vector.png'/>
                    <img className={`imgg ${fig[0]}`} src ={props.figura}/>
                </div>
                
                
            </div>    
            <div className={cas[1]}>
                <p>{props.texto}</p>
                <img  onClick={Opcao} className='setinha'  src='setinha.png'/>
            </div>
            <div  className={cla[0]}>
                <p>{props.reposta}</p>
                <div className='opcao'>
                    <div onClick={() =>{
                         abrir(props.i)
                         props.soma()
                         FinalVer()
                         immgg() }} className='vermelho'> <h1> Não lembrei</h1></div>
                     <div onClick={() =>{FinalAma()
                     abrir(props.i)
                     props.soma()
                     immgg() }} className='amarelo'><h1>quase não lembrei</h1></div>
                      <div onClick={() =>{ FinalVerd()
                    abrir(props.i)
                    props.soma()
                    immgg() }} className='verde'><h1>Zap</h1></div>
                </div>
            </div>
          
        </>
    )
}