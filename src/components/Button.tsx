

interface Props{
    children: string;
    onClickButton:() => void;
    color?: 'primary' | 'secondary'; //sinalizando que esse atributo é opcional e vc pode não colocar, ai não precisamos passar como atributo no App.tsx e que só aceita as opções primary e secondary, da erro caso não seja uma delas
}

function Button({children, color, onClickButton }:Props){

    return (
        <>  
            <button type="button" className={'btn btn-'+color}
            onClick={() =>{onClickButton()}}>
                {children}
            </button>
        </>
    );
}

export default Button;