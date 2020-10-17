import React from 'react'
import Founder from '../images/20200503_145915.jpg'
import Praveen from '../images/praveen.jpeg'
import './home.css'

const Home = ()  => {
    const callthis = (dots, moreText, btnText)=> {
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    
    const myFunction1 = () =>{
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more1");
        var btnText = document.getElementById("myBtn1");
        callthis(dots, moreText, btnText);
    
    }
    
    const myFunction2 =() => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more2");
        var btnText = document.getElementById("myBtn2");
        callthis(dots, moreText, btnText);
    
    }
    
    const myFunction3 =() =>{
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more3");
        var btnText = document.getElementById("myBtn3");
        callthis(dots, moreText, btnText);
    
    }
    
    const myFunction4 = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more4");
        var btnText = document.getElementById("myBtn4");
        callthis(dots, moreText, btnText);
    
    }
    
    const myFunction5 = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more5");
        var btnText = document.getElementById("myBtn5");
        callthis(dots, moreText, btnText);
    
    }
    
    const myFunction6 = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more6");
        var btnText = document.getElementById("myBtn6");
        callthis(dots, moreText, btnText);
    
    }
    return (
       <React.Fragment>
           <section id="header">
                <section id="text">
                    <h1>Welcome To Evergreen Public School</h1>
                    <p>Learning Becomes Easier,Playful and Smart</p>
                    <marquee scrollamount="10" style={{color:"red",fontSize:"30px",marginBottom:"3rem"}}><b>50% Off On Admission Fees (Due to COVID-19)</b></marquee><br />
                    <a href="https://forms.gle/py664FeKN1rM4aCTA">Apply Online</a>
                </section>
            </section>
            <h1>Our Facilities</h1>

            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-4">
                        <div class="card text-center main-card" style={{width:"28rem"}}>
                            <div class="card-body">
                                <h5 class="card-title title">Swimming Pool</h5>
                                <p class="card-text text">we humans have to learn how to keep our bodies afloat and move in water. But knowing how
                                    to
                                    swim is more than <span id="dots">...</span><span id="more1">a sport, it is a fundamental life skill. Studies
                                        have shown that when a child learns how to be safe
                                        in water, they automatically gain confidence, develop new skills and make healthier life choices. Swimming
                                        also serves
                                        as great low-strain exercise. It is good for the heart, lungs and muscles without adding strain to the
                                        joints. Adding
                                        a swimming pool to our school’s infrastructure allows us to give your child access to all the benefits of
                                        swimming.</span></p>
                                <button onClick={myFunction1} id="myBtn1">Read more</button>
                            
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4">
                        <div class="card text-center main-card" style={{width:"28rem"}}>
                            <div class="card-body">
                                <h5 class="card-title title">Smart Class</h5>
                                <p class="card-text text">What is Smartclass? The advent of information technology in education has changed its scenario
                                    by 360degrees. Smart class  <span id="dots">...</span><span id="more2">is a latest means of dispensing information to students in an effective way by using
                                    information technology. It provides tools and content for interactive self-paced learning by students, as well as
                                    rich-media presentations for teacher-led classroom learning.
                                    The content available consists of pedagogically sound and visually rich curriculum resources mapped and customized
                                    as per the school's Scheme of Work. This content will be streamed into the classroom and shown by teachers in the
                                    classroom to make abstract concept real.
                                    Benefits of Smart Class:
                                
                                    1 Improves teacher effectiveness and productivity in class.
                                    2 It brings abstract and difficult curriculum concepts to life inside classrooms.
                                    3 Makes learning an enjoyable experience for students.
                                    4 Improves academic performance of students.
                                    5 Enables instant formative assessment of learning outcomes in class.
                                    6 It also enables teachers to instantly assess and evaluate the learning achieved by their students in class.</span></p>
                                    <button onClick={myFunction2} id="myBtn2">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4">
                        <div class="card text-center main-card" style={{width:"28rem"}}>
                            <div class="card-body">
                                <h5 class="card-title title">Transport</h5>
                                <p class="card-text text">Evergreen Public School has an excellent maruti vans with stops at regular intervals for
                                    picking up students and  <span id="dots">...</span><span id="more3">teachers. These vans, while movement of students, have a teacher to ensure proper
                                    discipline and safety of the students. The school drivers are responsible to drop the children at their
                                    respective stops. For ensuring additional safety of our students and to avoid rash driving, the school has
                                    installed speed governors in the buses with speed limit set at 40kms/hr.</span></p>
                                    <button onClick={myFunction3} id="myBtn3">Read more</button>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-12 col-sm-4">
                        <div class="card text-center main-card" style={{width:"28rem"}}>
                            <div class="card-body">
                                <h5 class="card-title title">Indoor and Outdoor games</h5>
                                <p class="card-text text">Sports in the institution play a central role in preparing the students to be
                                    psychologically and  <span id="dots">...</span><span id="more4">physically strong to face adversaries with a competitive spirit. It helps to instill a
                                    spirit of teamwork and harmonies in the students.
                                    Adequate facilities are available for sports and games for co-curricular activities. The school promotes sports
                                    activities for inculcating healthy Sportsman spirit among the students. A well laid playground is available to
                                    pursue outdoor sports activities. The campus has facilities for indoor and outdoor games</span></p>
                                    <button onClick={myFunction4} id="myBtn4">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4">
                        <div class="card text-center main-card" style={{width:"28rem"}}>
                            <div class="card-body">
                                <h5 class="card-title title">Computer lab</h5>
                                <p class="card-text text">The School has a very good computer lab having 25 computers with LCD projector to provide
                                    easy way of learning.  <span id="dots">...</span><span id="more5">All the computers are connected in the Local Area Network (LAN) to enhance the teaching
                                    and learning environment very convenient.</span></p>
                                    <button onClick={myFunction5} id="myBtn5">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4">
                        <div class="card text-center main-card" style={{width: "18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title title">Canteen-The Healthy Zone </h5>
                                <p class="card-text text">In keeping with our school’s aim of providing all-round development and care, we provide
                                    our children meals that are healthy,  <span id="dots">...</span><span id="more6">well-balanced and nutritious. We want our children to be individuals who
                                    enjoy good health – a strong mind and a fit body. The cafeteria plays a key role in a student’s life and we
                                    endeavour to keep our children free from lifestyle related illnesses that are rampant in the society today.</span></p>
                                    <button onClick={myFunction6} id="myBtn6">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <h1>Our Founders</h1>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-5">
                        <div class="card pic" style={{width:"28rem"}}>
                            <img class="card-img-top in-pics" src={Praveen} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Managing Director </h5>
                                <p class="card-text main-text"><b>"Education is the most powerful weapon which you can use to change the world"— Nelson Mandela.</b>
                                    This guiding principle of the institute, throughout , has been creation of a knowledge base. Evergreen Public
                                    School has broad horizons as we believe in exposure. We aim to inculcate human values and professional ethics in
                                    the students, which help them to recognise their inner potential and grow on their own accord into stalwarts of
                                    tomorrow's society. . The seeds of the discipline that are sown in the heart and mind of the students help them
                                    to germinate into torch bearer of tomorrow as people who are accustomed to success. We have a vision to educate
                                    more and more students with quality education , to fulfill its mission each student is motivated to strive
                                    towards achieving excellence in every endeavour. I seek the blessing and support of all the stake holders in
                                    achieving the mission of Evergreen Public School.</p>
                                <p><b>~Praveen Kumar singh</b></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="card pic" style={{width:"28rem"}}>
                            <img class="card-img-top in-pics" src={Founder} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Principal</h5>
                                <p class="card-text main-text">Dear Students, Staff and Parents:
                                
                                    Welcome to the 2020-2021 school year! Our commitment at Evergreen Public School is to provide a safe and
                                    intellectually challenging environment that will empower students to become innovative thinkers, creative problem
                                    solvers and inspired learners prepared to thrive in the twenty-first century.
                                
                                    High standards and expectations for each student in regard to academic performance, co-curricular participation, and
                                    responsible citizenship are the foundation of our school. It is with pride that we hold these high standards and ask
                                    each of our students to commit to maintaining the extraordinary record of achievement and contribution that has been
                                    the legacy of Evergreen Public School students. It is the contribution of our students to our school community that
                                    makes Evergreen Public School an exceptional learning community. Full participation in academic and co-curricular
                                    programs and a willingness to act responsibly as an individual within our educational environment are the factors
                                    that enable all to have a successful and enjoyable year.</p>
                                
                                    <p><b>~Renu Bakshi</b></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-1"></div>
                </div>
            </div>

</React.Fragment>
    )
}

export default Home
