import React, { useState } from 'react';
import './App.css';

function App() {
const [message, setMessage] = useState("");
const [response, setResponse] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
fetch('http://localhost:3001/', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ message }),
})
.then((res) => res.json())
.then((data) => setResponse(data.message))
};

return (
<div className="App">
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
<form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
<textarea
value={message}
onChange={(e) => setMessage(e.target.value)}
style={{width: '80%', height: '50px'}}
>
</textarea>
<br />
<br />
<button type="submit">Submit</button>
</form>
</div>
{response &&
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
<div style={{textAlign: 'center'}}>
<b></b>
<br />
<br />
{response}
</div>
</div>
}
</div>
);
};

export default App;