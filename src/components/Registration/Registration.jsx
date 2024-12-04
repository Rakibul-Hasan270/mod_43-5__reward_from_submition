import { useState } from "react";

const Registration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [isOpenModel, setIsOpenModal] = useState(false);

    const handelOnSubmit = event => {
        event.preventDefault();
        if (!isCheck) {
            alert("Please agree to the terms and conditions.");
            return;
        }
        const user = {
            name: name,
            email: email,
            password: password
        }
        console.log(user)
        setIsOpenModal(true);
    }

    const handelModalClosed = () => {
        setIsOpenModal(false);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-rose-300">
            <div className="flex justify-center items-center bg-purple-500 p-20">
                <form onSubmit={(event => handelOnSubmit(event))} action="">
                    <div className="">
                        <label htmlFor="">Name:</label>
                        <input required onChange={(event) => setName(event.target.value)} className="ml-5" type="text" placeholder="Your Name" />
                    </div>

                    <div className="mb-5 mt-5">
                        <label htmlFor="">Email:</label>
                        <input required onChange={(event) => setEmail(event.target.value)} className="ml-5" type="email" placeholder="Your Email" />
                    </div>

                    <div className="">
                        <label htmlFor="">Password:</label>
                        <input required onChange={(event) => setPassword(event.target.value)} className="ml-5" type="password" placeholder="Your Password" />
                    </div>
                    <div className="mt-2">
                        <input onChange={(event) => setIsCheck(event.target.checked)} type="checkbox" name="" id="" /> Confirm our trams and Condition
                    </div>
                    <div className="flex justify-end"><button className="btn btn-accent bg-slate-500 mt-8 p-3">Submit</button></div>
                </form>

                {isOpenModel &&
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-10 rounded">
                            <h2 className="text-2xl font-bold">Registration Successful!</h2>
                            <p className="mt-4">Thank you for registering, {name}!</p>
                            <button onClick={() => handelModalClosed()} className="mt-6 bg-blue-500 text-white p-2 rounded">Close</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Registration;