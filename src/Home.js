import './App.css';

function Home() {

  const clickButton = (e)=>{
    alert(e.target.name+" button is clicked");
  };
  //todo: break down the page into different component to reuse
  return (
    <div className="App">
      <header className="App-header">
        <img className='App-logo'src='https://picsum.photos/50' alt='tutorassist.io logo'/>
        <h2>TutorAssist.IO</h2>
        <div className='login-wrapper'>
          <input className='input-field' placeholder='Username' type={'username'}
          label='username'
          name = 'username' />
          <input className='input-field' placeholder='Password' type={'password'}
          name='password'/>
          <button className='Button' name="Login" onClick={clickButton}>Login</button>
        </div>
      </header>
      <body className='App-body'>
        <div className='about-us frame'>
          <h1>About Us</h1>
          <p>Unlike many existing
tutoring applications that require costly subscriptions and lack the assurance of tutor
accreditation, our platform caters to students of all socioeconomic levels, offering them
high-quality, personalized tutoring in a range of subjects. Our application enables students to
search for tutors based on subject expertise, availability, and ratings, facilitating an engaging and
seamless learning experience. From K-12 to higher education, our core objective is to enhance
the knowledge and skills of students, not only improving their academic performance but also
empowering them for future career success.</p>
        </div>
        <div className='register frame'>
          <div className='register-form'>
          <h1>Register</h1>
          <input className='input-field' placeholder='Username' type={'username'}
            label='username'
            name = 'username' />
          <input className='input-field' placeholder='Email' type={'email'}
            label='email'
            name = 'email' />
          <input className='input-field' placeholder='Password' type={'password'}
            name='password'/>
          <input className='input-field' placeholder='Confirm Password' type={'password'}
            name='password'/>
          <select>
            <option value="option 1">question1</option>
            <option value="option 2">question2</option>
             </select>
          <input className='input-field' placeholder='Answer 1' type={'text'}
            label='answer1'
            name = 'answer1' />
          <select>
            <option value="option 3">question3</option>
            <option value="option 4">question4</option>
             </select>
          <input className='input-field' placeholder='Answer 2' type={'text'}
            label='answer1'
            name = 'answer1' />
          <button className='Button' name="Submit" onClick={clickButton}>Submit</button>
          </div>
          <p>User registration form will include username, password, security questions, security
answers, and email.
● Admin will approve the registration request from the visitor, and the system will send an
email notification.
● If a user forgets a password, they can reset it using their security questions.</p>
        </div>
      </body>
      <footer style={{backgroundColor:"red", justifyContent:"flex-end"}}>TODO: Add trademark and social media links</footer>
    </div>
  );
}

export default Home;
