import React,{useState} from 'react';

function BMI() {
    const [user,setUser]=useState({
        age:"",gender:"",weight:"",height:"",calculate:"",view:""
    })
   let arr=new Array(101).fill(0);
function findWeight(e){
    e.preventDefault();
    let bmi=user.weight/user.height;
    setUser({...user,calculate:bmi})

    if(user.gender==="male"){
        if( bmi<18.5)
        setUser({...user,view:"UnderWeight"});
        else if(bmi>18.5&&bmi<=24.9)
        setUser({...user,view:"Normal Weight"});
        else if(bmi>=25&&bmi<=29.9)
        setUser({...user,view:"OverWeight"});
        else
        setUser({...user,view:"Obesity"});
    }
    else{
        if( bmi<20.5)
        setUser({...user,view:"UnderWeight"});
        else if(bmi>20.5&&bmi<=26.9)
        setUser({...user,view:"Normal Weight"});
        else if(bmi>=27&&bmi<=31.9)
        setUser({...user,view:"OverWeight"});
        else
        setUser({...user,view:"Obesity"});
    }
}
// console.log(arr);

function update(e){
    let {name,value}=e.target;
    if(name==="height")
   { value=value*2.54;
    value/=100;}

    setUser({...user,[name]:value});
}
console.log(user);

    return (
        <div>
            <form onSubmit={findWeight}>
                <label>
                    Age:
                    <select onChange={update} name="age">
                    <option value="">Select age</option>
                    {arr.map((e,i)=>{
                    if(i>1)
                   return <option value={i}>{i}</option>})}

                    </select>
                </label><br/>
                <label>
                    Gender:
                    <select onChange={update} name="gender">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">female</option>
                    </select>
                </label><br/>
                <label>
                    Weight:
                    <input type="number" step="any" name="weight" placeholder='Enter weight in kg' onChange={update}/>
                </label><br/>
                <label>
                    Height:
                    <input type="number" step="any" name="height" placeholder='Enter height in Inches' onChange={update}/>
                </label><br/>
                <button disabled={(user.age&&user.gender&&user.weight&&user.height)?false:true}>Submit</button>
            </form>
            
            <h3>{user.view?user.view:"Enter Details"}</h3>
        </div>
    );
}

export default BMI;