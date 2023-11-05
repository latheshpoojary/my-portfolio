const skill = document.querySelector('.skill-desc');
const education = document.querySelector('.education-desc');
const certificate = document.querySelector('.certificate-desc');
const showButton = document.getElementById("showButton");
const parent = document.querySelector(".project");
const toggle_mode = document.getElementById('toggle-mode');
let toggle = false;
let sections = document.querySelectorAll('section');


localStorage.getItem('toggle-mode') && document.body.classList.add('toggle-mode');


showButton.addEventListener("click", () => {
	toggle = !toggle;
	const hiddenDivs = parent.querySelectorAll("div:nth-child(n + 4)");
	if (toggle) {
		showButton.textContent = "Show Less"
		hiddenDivs.forEach((div) => {
			div.style.height = '450px';
    });
	}
	else {
		showButton.textContent = "Show More"
		
		hiddenDivs.forEach((div) => {
      div.style.height='0px';
    });
	}
    
	});
	

	document.getElementById('download').addEventListener('click', function() {
		// Create an anchor element to trigger the download
		var link = document.createElement('a');
		link.setAttribute('href', 'c:/Users/PACE/Downloads/Lathesh_4AL19IS020_resume (2).pdf'); // Replace with the actual path to your PDF file
		link.setAttribute('download', 'c:/Users/PACE/Downloads/Lathesh_4AL19IS020_resume (2).pdf'); // You can change the downloaded file's name here
		link.style.display = 'none';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	});


toggle_mode.addEventListener('click', () => {
	console.log("clicked");
	if (document.body.classList.contains('toggle-mode')) {
		document.body.classList.remove('toggle-mode');
		localStorage.removeItem('toggle-mode');

	}
	else {
	document.body.classList.add('toggle-mode');
		localStorage.setItem('toggle-mode', 'light-mode');
	}
})

function showDetails(call){
	if (call === 'skill') {
		education.style.display = 'none';
		certificate.style.display = 'none';
		skill.style.display = 'block';
	}
	if (call === 'education') {
		certificate.style.display = 'none';
		skill.style.display = 'none';
		education.style.display = 'block';

	}
	if (call === 'certificate') {
		education.style.display = 'none';
		skill.style.display = 'none';
		certificate.style.display = 'block';

	}
}
