import React, {useState} from 'react'
//import React from 'react'

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");


    //input and output same page 
    const [allEntery, setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();

        const newEntry = { email: email, password: password };

        setAllEntry([...allEntery, newEntry]);
        console.log(allEntery);
    }


    return (
        <>
            <form action=""  onSubmit={submitForm}>
                <div>
                    <label htmlfor="email">Email</label>
                      <input type="text" name="email" id="email" autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} //object event
                    />
                </div>

                <div>       
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" autoComplete="off"
                        value={password}
                        onChange={(e) => setpassword(e.target.value) }
                    />
                </div>

                <button type="submit">Login</button>

            </form>


            <div>
                {
                    allEntery.map((curElem) => {
                        return (
                            <div className="showDataStyle">
                                <p>{curElem.email}</p>
                                <p>{curElem.password}</p>
                            </div>

                        )
                    })
                }
            </div>

        </>
        

        
    )
}

export default LoginForm;
