//header

let header = document.createElement('header');
header.setAttribute('id', 'header')
document.body.append(header)

let div1 = document.createElement('div');
div1.classList.add('header-div-1');
div1.innerHTML = '&nbsp;';

let div2 = document.createElement('div');
div2.classList.add('header-div-2');
div2.innerHTML = '&nbsp;';

let div3 = document.createElement('div');
div3.classList.add('header-div-3');
div3.innerHTML = '&nbsp;';

let divImg1 = document.createElement('div');
divImg1.setAttribute('class','img-name')
divImg1.setAttribute('style','top: 85px;')
divImg1.innerHTML = '<img src="static/dp.JPG" >';

let divImg2 = document.createElement('div');
divImg2.setAttribute('class','img-name')
divImg2.setAttribute('style','top: 200px;')
divImg2.innerHTML = '<p class = "header-name"> ANUNAY SINHA </p>';


let divP = document.createElement('div');
divP.setAttribute('style','text-align: center; margin: 0px')
divP.innerHTML = '<p style="margin: 1px auto;">Ranchi Jharkhand 834002 | 9840917857 | anusu90@gmail.com | www.github.com/anusu90</p>'

let hr = document.createElement('hr');
hr.setAttribute('style',"color: darkgray;")


header.append(div1,div2,div3, divImg1, divImg2, divP);
header.append( hr);
// document.body.append(header);

//SET MAIN
main = document.createElement('main');
document.body.append(main);

// LEFT COL
divMain = document.createElement('div');
divMain.setAttribute('class',"main-class");
divMain.setAttribute('style', "width: 100%;" )


let div4 = document.createElement('div');
div4.classList.add('left-col');
div4.innerHTML = '<div> '+
'                    <i class="fa fa-bullhorn" aria-hidden="true"></i>'+
'                    <b> About Me</b>'+
'                    <p>As an ex-civil services aspirant, I have learned to adapt, strive under pressure, and manage time efficiently. Despite my bachelor\'s in Mechanical, I have always had a pull towards programming. With the capability to self-learn, I have developed my knowledge in programming concepts and languages like — python, C, to note a few. My goal is to seek a challenging career that can utilize my talents and diverse skill set ensuring mutual growth and development.</p>'+
'                </div>';

// console.log(div1);

let div5 = document.createElement('div');
div5.innerHTML = '<i class="fas fa-briefcase" aria-hidden="true"></i>'+
'                    <h3>JOB EXPERIENCE</h3>'+
'        			<h4>Maintenance Engineer</h4><br>'+
'        			<h4>Bharat Petroleum Corporation Limited</h4><br>'+
'                    <h5> 06/2013 - 05/2015</h5> <br>'+
'                    <br>'+
'                    <i class="fas fa-running"></i>'+
'        			<h5>Achievements/Tasks</h5><br>'+
'        			<ul>'+
'        				<li>MIS - Worked on SAP</li>'+
'        				<li>Computation Fluid Dynamics (CFD) analysis to improve the efficiency of Heat Exchanger using tube inserts. The theoretical gains are being verified at Bina Refinery of BPCL.</li>'+
'        				<li>Shutdown Management using Primavera.Management of ARCs and Pipelines at MOT</li>'+
'        			</ul>';
	

let div6 = document.createElement('div');
div6.innerHTML = '<i class="fas fa-project-diagram"></i>'+
'                    <h3>PROJECTS</h3><br>'+
'        			<h4>Home Automation based on open source software HA.</h4> '+
'        			<h5>01/2020 - Present</h5>'+
'        			<p>'+
'        				Low cost, locally deployed IOT devices based on ESP8266. They have helped in automating various'+
'        				processes in my house leading to quantifiable savings and reduced wastage of resources. Designing and deploying all the circuits have been undertaken by me.'+
'        			</p>';
	

div4.append(div5,div6);
divMain.append(div4);
main.append(divMain);

// RIGHT COL
div7 = document.createElement('div');
div7.classList.add('right-col')

div8 = document.createElement('div');
div8.innerHTML = '<h4>Project on Fortran (2012) </h4>'+
'<p>'+
'    Real world pipe flow problem was solved by coding Navier-Stokes equation and boundary conditions (BCs)'+
'in fortran';

div9 = document.createElement('div');
div9.innerHTML = '<i class="fas fa-graduation-cap"></i>'+
'                    <h3>EDUCATION</h3><br>'+
'        			<h4>Mechanical Engineering - DGPA - 8.23</h4> '+
'        			<h4>IIT - BHU- Varanasi</h4>'+
'        			<h5>05/2009 - 06/2013</h5>'+
'        			<h5>Courses</h5>'+
'        			<ul>'+
'        				<li><p>B. Tech Project:Analysis of Pneumatic Control Valves in a Hydraulic Circuit.</p></li>'+
'        				<li><p>Heat and Mass Transfer, Fluid Mechanics,SOM, Machine Design, Turbomachinery.</p></li>'+
'                    </ul>';


div10 = document.createElement('div');
div10.innerHTML = '<i class="fas fa-pen-alt"></i>'+
'                    <h4>SKILLS</h4>'+
'                    <p> '+
'                        Python ANSYS CATIA FLUENT'+
'                    </p>';


div11 = document.createElement('div');
div11.innerHTML = '<h4>LANGUAGES</h4>'+
'                    <p>'+
'                    ENGLISH HINDI'+
'                    </p>';
	



div12 = document.createElement('div');
div12.innerHTML = '<h4>INTERESTS</h4>'+
'<p>HISTORY MOVIES PROGRAMMING CRICKET</p>';

// console.log(div2,div3)
div7.append(div8,div9, div10, div11, div12);
divMain.append(div7);